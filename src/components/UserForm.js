import React, { useState } from "react";
import { Confirm } from "./Confirm";
import { FormPersonalDetails } from "./FormPersonalDetails";
import { FormUserDetails } from "./FormUserDetails";
import { Success } from "./Success";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import formValidation from "../Helpers/formValidation";

export const UserForm = ({ setTitle }) => {
  const [formErrors, setFormErrors] = useState({});

  const fieldsValidation = {
    firstName: {
      error: "",
      validate: "text",
      minLength: 2,
      maxLength: 20,
    },
    lastName: {
      error: "",
      validate: "text",
      minLength: 2,
      maxLength: 20,
    },
    email: {
      error: "",
      validate: "email",
    },
    city: {
      error: "",
      validate: "text",
      minLength: 3,
      maxLength: 20,
    },
    bio: {
      error: "",
      validate: "text",
      minLength: 2,
      maxLength: 20,
    },
    occupation: {
      error: "",
      validate: "text",
      minLength: 2,
      maxLength: 20,
    },
  };

  const [state, setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  const nextStep = () => {
    setState({ ...state, step: state.step + 1 });
  };
  const prevStep = () => {
    setState({ ...state, step: state.step - 1 });
  };
  const updateDetails = (title) => {
    setTitle(title);
  };

  const handleChange = (input, e) => {
    const { name, value } = e.target;

    setState({ ...state, [input]: e.target.value });
    // set errors
    const error = formValidation(name, value, fieldsValidation) || "";

    setFormErrors({
      [name]: error,
    });
  };
  const labels = ["First Step", "Second Step", "Confirmation"];

  const stepper = (
    <Stepper
      activeStep={state.step - 1}
      style={{ margin: "30px 0 15px" }}
      alternativeLabel
    >
      {labels.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
  switch (state.step) {
    case 1:
    default:
      return (
        <>
          {stepper}
          <FormUserDetails
            formErrors={formErrors}
            updateDetails={updateDetails}
            values={state}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        </>
      );
    case 2:
      return (
        <>
          {stepper}

          <FormPersonalDetails
            formErrors={formErrors}
            updateDetails={updateDetails}
            values={state}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </>
      );

    case 3:
      return (
        <>
          {stepper}
          <Confirm
            updateDetails={updateDetails}
            values={state}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </>
      );
    case 4:
      return <Success updateDetails={updateDetails} />;
  }
};
