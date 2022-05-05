import React from "react";
import { Link } from "react-router-dom";
import { deleteEmployeePRApi, deleteEmployeeApi } from "./../../api/index";

export const TableManager = ({
  titleField,
  employeesManager,
  loadEmployeeManager,
}) => {
  console.log(employeesManager);

  const deleteEmployee = (employeeId) => {
    console.log(employeeId);

    deleteEmployeePRApi({ employeeId }).then((result) => {
      console.log(result);
    });

    deleteEmployeeApi({ employeeId }).then((result) => {
      console.log(result);
    });
    window.location.reload();
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
          {employeesManager.map((employee, index) => {
            return (
              <tr key={index}>
                <td>
                  <p className="fw-normal mb-1">{employee.Employee_ID}</p>
                </td>
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
                      </p>
                    </div>
                  </div>
                </td>

                <td>
                  <span className="badge badge-warning rounded-pill d-inline">
                    {employee.City}
                  </span>
                </td>
                <td>
                  <span className="badge badge-warning rounded-pill d-inline">
                    {employee.Plan_Name}
                  </span>
                </td>

                <td>
                  <span className="badge badge-warning rounded-pill d-inline">
                    {employee.Phone_Number}
                  </span>
                </td>

                <td>
                  <p className="fw-normal mb-1">{employee.Pay_Rate}</p>
                </td>
                <td>
                  {/* <Link
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
                  </Link> */}
                  <button
                    type="button"
                    className="btn btn-link btn-rounded btn-sm fw-bold"
                    onClick={() => deleteEmployee(employee.Employee_ID)}
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
export default TableManager;
