import React from "react";
import { Link } from "react-router-dom";
import { deleteEmployeeApi } from "../api";
import { deleteEmployeePRApi } from "../api";

export const Table = ({ employees, loadEmployee, titleField = [] }) => {
  const deleteEmployee = (employeeId) => {
    console.log(employeeId);
    if (titleField[1] === "SSN") {
      deleteEmployeePRApi({ employeeId }).then((result) => {
        console.log(result);
        loadEmployee();
      });
    } else {
      deleteEmployeeApi({ employeeId }).then((result) => {
        console.log(result);
        loadEmployee();
      });
    }
  };
  return (
    <div className="shadow mb-5 bg-white rounded" style={{ padding: "50px" }}>
      <table
        className="table align-middle mb-0 bg-white"
        style={{ boxShadow: "0 13px 31px 0 rgb(51 62 73 / 12%)" }}
      >
        <thead className="bg-light">
          <tr>
            {titleField.map((title, index) => {
              return <th key={index}>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={`https://mdbootstrap.com/img/new/avatars/${
                        index + 1
                      }.jpg`}
                      className="rounded-circle"
                      alt=""
                      style={{
                        width: "45px",
                        height: "45px",
                        marginRight: "12px",
                      }}
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">
                        {employee.First_Name} {employee.Last_Name}{" "}
                        {employee.Middle_Initial ? employee.Middle_Initial : ""}
                      </p>
                      <p className="text-muted mb-0">
                        {employee.Email ? employee.Email : ""}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">
                    {employee.State ? employee.State : employee.SSN}
                  </p>
                  <p className="text-muted mb-0">
                    {employee.City ? employee.City : ""}
                  </p>
                </td>
                <td>
                  <span className="badge badge-warning rounded-pill d-inline">
                    {employee.Plan_Name
                      ? employee.Plan_Name
                      : employee.Vacation_Days}
                  </span>
                </td>
                <td>
                  {" "}
                  {employee.Phone_Number
                    ? employee.Phone_Number
                    : employee.Pay_Rate}
                </td>
                <td>
                  <Link
                    to={`/edit-employee/${
                      employee.Employee_ID
                        ? `HR/${employee.Employee_ID}`
                        : `PR/${employee.Employee_Number}`
                    }`}
                  >
                    <button
                      type="button"
                      className="btn btn-link btn-rounded btn-sm fw-bold"
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-link btn-rounded btn-sm fw-bold"
                    onClick={() =>
                      deleteEmployee(
                        employee.Employee_ID
                          ? employee.Employee_ID
                          : employee.Employee_Number
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
