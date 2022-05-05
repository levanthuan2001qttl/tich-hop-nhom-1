import React, { useEffect, useState } from "react";
import { getEmployeePayrollApi } from "../../api";
import Table from "../../Layout/Table";
import Frame from "../../components/Frame";
import { Link } from "react-router-dom";

export const titleFieldPR = [
  "Name",
  "SSN",
  "Vacation Days",
  "Pay Rate",
  "Actions",
];

const DashboardPR = () => {
  const [employees, setEmployees] = useState();

  const loadEmployee = () => {
    getEmployeePayrollApi().then((data) => {
      setEmployees(data);
    });
  };
  // console.log(employees);
  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <Frame>
      {" "}
      <h3 className="text-center mt-4">
        <small className=" text-primary"> PAYROLL TABLE</small>
      </h3>
      <Link to="/create-employee-pr" style={{ marginLeft: "50px" }}>
        <button className="btn btn-primary">Create New Employee</button>
      </Link>
      {employees && (
        <Table
          employees={employees}
          loadEmployee={loadEmployee}
          titleField={titleFieldPR}
        />
      )}{" "}
    </Frame>
  );
};

export default DashboardPR;
