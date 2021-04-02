import { MuiThemeProvider, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import "./FormUserDetails.css";
export const FormUserDetails = ({
  nextStep,
  handleChange,
  values,
  updateDetails,
  formErrors,
}) => {
  const isValid =
    values.firstName.length > 0 &&
    !formErrors.firstName &&
    values.lastName.length > 0 &&
    !formErrors.lastName &&
    values.email.length > 0 &&
    !formErrors.email;

  const theme = createMuiTheme();
  useEffect(() => {
    updateDetails("Enter User Information");
    return () => {};
  }, [updateDetails]);
  const continueAhead = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <div className="container">
          <TextField
            name="firstName"
            value={values.firstName}
            onChange={(e) => handleChange("firstName", e)}
            required
            label="Enter First Name"
            variant="outlined"
            helperText={formErrors.firstName}
            error={!!formErrors.firstName}
          />
          <br />
          <TextField
            name="lastName"
            value={values.lastName}
            onChange={(e) => handleChange("lastName", e)}
            required
            label="Enter Last  Name"
            variant="outlined"
            helperText={formErrors.lastName}
            error={!!formErrors.lastName}
          />
          <br />
          <TextField
            name="email"
            value={values.email}
            onChange={(e) => handleChange("email", e)}
            required
            label="Enter Email"
            variant="outlined"
            helperText={formErrors.email}
            error={!!formErrors.email}
          />
          <br />
          <Button
            onClick={(e) => continueAhead(e)}
            variant="contained"
            color="primary"
            style={styles.button}
            disabled={!isValid}
          >
            Continue
          </Button>
        </div>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15,
  },
};
