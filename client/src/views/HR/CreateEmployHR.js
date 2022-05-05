import React from "react";
import { createEmployeeApi } from "../../api";
import { useNavigate } from "react-router-dom";
import Frame from "../../components/Frame";
import FormAction from "../../Layout/HumanResource/FormAction";

const CreateEmploy = () => {
  const navigate = useNavigate();

  const createNewEmp = (dataSubmit) => {
    createEmployeeApi(dataSubmit).then((result) => {
      // console.log(result);
      if (result > 0) navigate("/");
    });
  };

  return (
    <Frame>
      {
        <FormAction
          title="Create new employee Human Resources"
          action={createNewEmp}
          titleNameAction="Create"
        />
      }
    </Frame>
  );
};

export default CreateEmploy;
