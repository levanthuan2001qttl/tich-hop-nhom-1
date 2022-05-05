import React from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../../components/Frame";
import FormPR from "../../Layout/PayRoll/FormPR";
import { createEmployeePRApi } from "../../api";

const CreateEmploy = () => {
  const navigate = useNavigate();

  const createNewEmp = (dataSubmit) => {
    createEmployeePRApi(dataSubmit).then((result) => {
      if (result.affectedRows) navigate("/pr");
      console.log(result);
    });
  };

  return (
    <Frame>
      {
        <FormPR
          title="Create new employee Pay Roll"
          action={createNewEmp}
          titleNameAction="Create"
        />
      }
    </Frame>
  );
};

export default CreateEmploy;
