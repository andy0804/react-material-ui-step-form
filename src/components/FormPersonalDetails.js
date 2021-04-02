import { MuiThemeProvider, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import "./FormUserDetails.css";

export const FormPersonalDetails = ({
  nextStep,
  handleChange,
  prevStep,
  values,
  updateDetails,
  formErrors,
}) => {
  // Check if all values are not empty or if there are some error
  const isValid =
    values.occupation.length > 0 &&
    !formErrors.occupation &&
    values.bio.length > 0 &&
    !formErrors.bio &&
    values.city.length > 0 &&
    !formErrors.city;
  const theme = createMuiTheme();

  useEffect(() => {
    updateDetails("Enter Personal Information");
    return () => {};
  }, [updateDetails]);

  const continueAhead = (e) => {
    e.preventDefault();
    nextStep();
  };
  const goBack = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <div className="container">
          <TextField
            name="occupation"
            value={values.occupation}
            onChange={(e) => handleChange("occupation", e)}
            required
            label="Enter Occupation"
            variant="outlined"
            helperText={formErrors.occupation}
            error={!!formErrors.occupation}
          />
          <br />
          <TextField
            name="city"
            value={values.city}
            onChange={(e) => handleChange("city", e)}
            required
            label="Enter City"
            variant="outlined"
            helperText={formErrors.city}
            error={!!formErrors.city}
          />
          <br />
          <TextField
            name="bio"
            value={values.bio}
            onChange={(e) => handleChange("bio", e)}
            required
            label="Enter Bio"
            variant="outlined"
            helperText={formErrors.bio}
            error={!!formErrors.bio}
          />
          <br />
          <div className="buttonContainer">
            <Button
              onClick={(e) => goBack(e)}
              variant="contained"
              color="primary"
              style={styles.button}
            >
              Previous
            </Button>
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
