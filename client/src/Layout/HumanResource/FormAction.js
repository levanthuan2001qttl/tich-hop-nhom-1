import React from "react";
import { useRef, useEffect, useState } from "react";
import { getBenefitPlans } from "../../api";
import { useNavigate, Link, useParams } from "react-router-dom";

const FormAction = ({
  employee = undefined,
  title,
  action,
  titleNameAction,
  isManaged = false,
}) => {
  const { employeeId } = useParams();
  const nameRef = useRef();
  const emailRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const phoneNumberRef = useRef();
  const driveLicenseNumberRef = useRef();
  const genderRef = useRef();
  const shareholderRef = useRef();
  const benefitRef = useRef();
  const ethnicityRef = useRef();
  const maritalRef = useRef();
  const employeeIdRef = useRef();

  const [benefitPlans, setBenefitPlans] = useState();
  console.log(employee);
  const loadBenefitPlan = async () => {
    await getBenefitPlans().then((benefitPlans) => {
      setBenefitPlans(benefitPlans.result);
    });
  };

  console.log(benefitPlans);

  useEffect(() => {
    loadBenefitPlan();
  }, []);

  const submitData = () => {
    const dataSubmit = {
      employeeId: employeeId ? employeeId : employeeIdRef.current.value,
      fullName: nameRef.current.value,
      email: emailRef.current.value,
      state: stateRef.current.value,
      city: cityRef.current.value,
      zip: zipRef.current.value,
      phone: phoneNumberRef.current.value,
      licenseDrivers: driveLicenseNumberRef.current.value,
      gender: genderRef.current.value,
      marital: maritalRef.current.value,
      shareholder: shareholderRef.current.value,
      benefit: benefitRef.current.value,
      ethnicity: ethnicityRef.current.value,
    };

    action(dataSubmit);
  };

  return (
    <div className="container-fluid" style={{ width: "800px" }}>
      <h3 className="text-center mt-4 mb-4">
        <small className="text-info"> {title}</small>
      </h3>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputName4">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName4"
            placeholder="Name"
            ref={nameRef}
            defaultValue={
              employee
                ? `${employee.First_Name} ${employee.Middle_Initial} ${employee.Last_Name}`
                : ""
            }
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputCity4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputCity4"
            placeholder="Email"
            ref={emailRef}
            defaultValue={employee ? employee.Email : ""}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">State</label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="State"
            ref={stateRef}
            defaultValue={employee ? employee.State : ""}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputZip">City</label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="City"
            ref={cityRef}
            defaultValue={employee ? employee.City : ""}
          />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputZip">Zip</label>
          <input
            type="number"
            className="form-control"
            id="inputZip"
            placeholder="Zip city"
            ref={zipRef}
            defaultValue={employee ? employee.Zip : ""}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Phone number</label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Phone number"
            ref={phoneNumberRef}
            defaultValue={employee ? employee.Phone_Number : ""}
          />
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputZip">Drive license</label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="Drive license"
            ref={driveLicenseNumberRef}
            defaultValue={employee ? employee.Drivers_License : ""}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputZip">Marital_Status</label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="Marital_Status"
            ref={maritalRef}
            defaultValue={employee ? employee.Marital_Status : ""}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="inputCity">Gender</label>
          <input
            type="number"
            className="form-control"
            id="inputCity"
            ref={genderRef}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputZip">Shareholder</label>
          <input
            type="number"
            className="form-control"
            id="inputZip"
            ref={shareholderRef}
            defaultValue={employee ? employee.Shareholder_Status : ""}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputState">Benefit plan</label>
          <select
            id="inputState"
            className="form-control"
            ref={benefitRef}
            defaultValue={employee ? employee.Benefit_Plans : ""}
            style={{}}
          >
            <option value={employee ? employee.Benefit_Plan_ID : ""}>
              {employee ? employee.Plan_Name : "Choose..."}
            </option>
            {benefitPlans &&
              benefitPlans.map((benefitPlan, index) => (
                <option value={benefitPlan.Benefit_Plan_ID}>
                  {benefitPlan.Plan_Name}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputZip">Ethnicity</label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="Eg. Kinh"
            ref={ethnicityRef}
            defaultValue={employee ? employee.Ethnicity : ""}
          />
        </div>
        {!employeeId && (
          <div className="form-group col-md-3">
            <label htmlFor="inputZip">Employee ID:</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              placeholder="Eg. 1 or 2 or 3 ..."
              ref={employeeIdRef}
            />
          </div>
        )}
      </div>
      <button
        style={isManaged ? { display: "none" } : { display: "" }}
        type="submit"
        className="btn btn-primary mr-4"
        onClick={submitData}
      >
        {titleNameAction}
      </button>{" "}
      <Link to="/" style={isManaged ? { display: "none" } : { display: "" }}>
        <button type="submit" className="btn btn-danger ml-4">
          Cancel
        </button>
      </Link>
    </div>
  );
};

export default FormAction;
