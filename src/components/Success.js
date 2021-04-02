import React, { useEffect } from "react";
import Alert from "@material-ui/lab/Alert";
import "./FormUserDetails.css";
import Typography from "@material-ui/core/Typography";

export const Success = ({ nextStep, prevStep, values, updateDetails }) => {
  useEffect(() => {
    updateDetails("Success");
    return () => {};
  }, [updateDetails]);

  return (
    <div className="container">
      <Typography variant="h6">
        <Alert severity="success">
          Thank you for submitting your information. We will be in touch
          shortly.
        </Alert>
      </Typography>
    </div>
  );
};

export default Success;
