import React, { useState, useEffect } from "react";
import Table from "../../Layout/Table";

import Frame from "./../../components/Frame/index";
import { getEmployeesApi, getEmployeePayrollApi } from "./../../api/index";
import { TableManager } from "./../../components/TableManager/index";
import { Link } from "react-router-dom";
export const titleFieldManager = [
  "ID",
  "Name",
  "Address",
  "Plan name",
  "Phone",
  "Pay Rate",
  "Actions",
];
const Manager = () => {
  const [employeesManager, setEmployeesManager] = useState({
    employeesHR: [],
    employeesPR: [],
  });
  const [person, setPerson] = useState();
  var employees = [];

  const loadEmployeeManager = async () => {
    const employeesHR = await getEmployeesApi();
    const employeesPR = await getEmployeePayrollApi();
    setEmployeesManager({
      employeesHR: employeesHR.result,
      employeesPR: employeesPR,
    });
  };
  useEffect(() => {
    for (let index in employeesManager.employeesHR) {
      const employee = Object.assign({}, employeesManager.employeesHR[index], {
        Pay_Rate: employeesManager.employeesPR[index].Pay_Rate,
      });
      employees.push(employee);
    }
    setPerson(employees);
  }, [employeesManager]);

  useEffect(() => {
    loadEmployeeManager();
  }, []);
  return (
    <Frame>
      <h3 className="text-center mt-4">
        <small className=" text-info"> INTEGRATION TABLE</small>
      </h3>
      <Link to="/create-employee-manager" style={{ marginLeft: "50px" }}>
        <button className="btn btn-primary">Create New Employee</button>
      </Link>
      {person && (
        <TableManager
          titleField={titleFieldManager}
          employeesManager={person}
          loadEmployeeManager={loadEmployeeManager}
        />
      )}
    </Frame>
  );
};

export default Manager;
