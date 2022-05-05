import React from "react";
import { useRef, useEffect, useState } from "react";
import { getBenefitPlans } from "../../api";
import { useNavigate, Link, useParams } from "react-router-dom";

const FormPR = ({
  employee = undefined,
  title,
  action,
  titleNameAction,
  isManaged = false,
}) => {
  const Employee_Number = useRef();
  const idEmployee = useRef();
  const Last_Name = useRef();
  const First_Name = useRef();
  const SSNRef = useRef();
  const Pay_Rate = useRef();
  const PayRates_id = useRef();
  const Vacation_Days = useRef();
  const Paid_To_Date = useRef();
  const Paid_Last_Year = useRef();

  const submitData = () => {
    const dataSubmit = {
      Employee_Number: Employee_Number.current.value,
      idEmployee: idEmployee.current.value,
      Last_Name: Last_Name.current.value,
      First_Name: First_Name.current.value,
      SSNEm: SSNRef.current.value,
      Pay_Rate: Pay_Rate.current.value,
      PayRates_id: PayRates_id.current.value,
      Vacation_Days: Vacation_Days.current.value,
      Paid_To_Date: Paid_To_Date.current.value,
      Paid_Last_Year: Paid_Last_Year.current.value,
    };
    console.log(dataSubmit);
    action(dataSubmit);
  };

  return (
    <div className="container-fluid" style={{ width: "800px" }}>
      <h3
        className="text-center mt-4 mb-4"
        style={isManaged ? { display: "none" } : { display: "block" }}
      >
        <small className="text-info"> {title}</small>
      </h3>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputName4">Employee Number</label>
          <input
            type="text"
            className="form-control"
            id="inputName4"
            placeholder="Employee Number"
            ref={Employee_Number}
            defaultValue={employee ? employee.Employee_Number : ""}
          />
        </div>
        <div
          className="form-group col-md-6"
          style={isManaged ? { display: "none" } : { display: "block" }}
        >
          <label htmlFor="inputCity4">Id Employee</label>
          <input
            type="text"
            className="form-control"
            id="inputCity4"
            placeholder="Id Employee"
            ref={idEmployee}
            defaultValue={employee ? employee.idEmployee : ""}
          />
        </div>
      </div>
      <div className="form-row">
        <div
          className="form-group col-md-6"
          style={isManaged ? { display: "none" } : { display: "block" }}
        >
          <label htmlFor="inputCity">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Last Name"
            ref={Last_Name}
            defaultValue={employee ? employee.Last_Name : ""}
          />
        </div>
        <div
          className="form-group col-md-4"
          style={isManaged ? { display: "none" } : { display: "block" }}
        >
          <label htmlFor="inputZip">First Name</label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="First Name"
            ref={First_Name}
            defaultValue={employee ? employee.First_Name : ""}
          />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputZip">SSN</label>
          <input
            type="number"
            className="form-control"
            id="inputZip"
            placeholder="SSN"
            ref={SSNRef}
            defaultValue={employee ? employee.SSN : ""}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Pay rate</label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Pay rate"
            ref={Pay_Rate}
            defaultValue={employee ? employee.Pay_Rate : ""}
          />
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputZip">Pay rate Id</label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="Pay rate Id"
            ref={PayRates_id}
            defaultValue={employee ? employee.PayRates_id : ""}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputZip">Vacation Date</label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="Vacation"
            ref={Vacation_Days}
            defaultValue={employee ? employee.Vacation_Days : ""}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="inputCity">Paid to Date</label>
          <input
            type="number"
            className="form-control"
            id="inputCity"
            ref={Paid_To_Date}
            defaultValue={employee ? employee.Paid_To_Date : ""}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputZip">Paid last year</label>
          <input
            type="number"
            className="form-control"
            id="inputZip"
            ref={Paid_Last_Year}
            defaultValue={employee ? employee.Paid_Last_Year : ""}
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mr-4"
        onClick={submitData}
      >
        {titleNameAction}
      </button>{" "}
      <Link to={isManaged ? "/manager" : "/pr"}>
        <button type="submit" className="btn btn-danger ml-4">
          Cancel
        </button>
      </Link>
    </div>
  );
};

export default FormPR;
