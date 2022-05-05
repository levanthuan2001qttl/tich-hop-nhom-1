import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getEmployeeInfoApi, updateEmployeeApi } from "../../api/index";
import Frame from "../../components/Frame";
import FormAction from "../../Layout/HumanResource/FormAction";
const EditEmployeeHR = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState();
  const navigate = useNavigate();

  const loadEmployee = () => {
    getEmployeeInfoApi(employeeId).then((data) => {
      setEmployee(data.result);
    });
  };

  const editEmp = (dataSubmit) => {
    updateEmployeeApi(dataSubmit).then((data) => {
      console.log(data);
      navigate("/");
    });
  };
  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <Frame>
      {employee && (
        <FormAction
          employee={employee[0]}
          title="Update Employee Human Resources"
          action={editEmp}
          titleNameAction="Update"
        />
      )}
    </Frame>
  );
};
export default EditEmployeeHR;
