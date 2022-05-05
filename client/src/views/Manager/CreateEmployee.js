import React from "react";
import { createEmployeeApi } from "../../api";
import { useNavigate } from "react-router-dom";
import Frame from "../../components/Frame";
import FormAction from "../../Layout/HumanResource/FormAction";
import FormPR from "./../../Layout/PayRoll/FormPR";

const CreateEmployMa = () => {
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
        <>
          <FormAction title="Create new employee" isManaged />
          <FormPR isManaged titleNameAction="Create" />
        </>
      }
    </Frame>
  );
};

export default CreateEmployMa;
