import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getPREmployeeDetailApi, updateEmployeePRApi } from "../../api";

import Frame from "../../components/Frame";
import FormPR from "../../Layout/PayRoll/FormPR";
const EditEmployeePR = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState();
  const navigate = useNavigate();

  const loadEmployee = async () => {
    const data = await getPREmployeeDetailApi(employeeId);
    if (data.length > 0) {
      setEmployee(data[0]);
    } else alert("user not found");
  };

  const editEmp = async (dataSubmit) => {
    const data = await updateEmployeePRApi(dataSubmit);
    console.log(data);
    navigate("/pr");
  };
  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <Frame>
      {employee && (
        <FormPR
          employee={employee}
          title="Update Employee Pay Roll"
          action={editEmp}
          titleNameAction="Update"
        />
      )}
    </Frame>
  );
};
export default EditEmployeePR;
