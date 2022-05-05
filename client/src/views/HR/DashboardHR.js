import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Layout/sideBar";
import logo from "../../assets/img/logo.png";
import Table from "../../Layout/Table";
import { getEmployeesApi } from "../../api/index";
import Frame from "../../components/Frame";

export const titleFieldHR = [
  "Name",
  "Address",
  "Plan name",
  "Phone",
  "Actions",
];

const DashboardHR = () => {
  const [employees, setEmployees] = useState();
  const loadEmployee = () => {
    getEmployeesApi().then((data) => {
      setEmployees(data.result);
    });
  };
  useEffect(() => {
    loadEmployee();
  }, []);
  // console.log(employees);
  return (
    <Frame>
      {" "}
      <h3 className="text-center mt-4">
        <small className=" text-info"> HUMAN RESOURCES TABLE</small>
      </h3>
      <Link to="/create-employee-hr" style={{ marginLeft: "50px" }}>
        <button className="btn btn-primary">Create New Employee</button>
      </Link>
      {employees && (
        <Table
          employees={employees}
          loadEmployee={loadEmployee}
          titleField={titleFieldHR}
        />
      )}{" "}
    </Frame>
  );
};
export default DashboardHR;
