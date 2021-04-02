import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import "./FormUserDetails.css";
import Typography from "@material-ui/core/Typography";

// Destructure props
export const Confirm = ({ nextStep, prevStep, values, updateDetails }) => {
  useEffect(() => {
    updateDetails("Confirm your details");
    return () => {};
  }, [updateDetails]);
  const handleSubmit = () => {
    nextStep();
  };
  return (
    <div className="container">
      <Typography variant="h6">Summary</Typography>

      <List disablePadding>
        <ListItem>
          <ListItemText primary="First Name" secondary={values.firstName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Last Name" secondary={values.lastName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Email Address" secondary={values.email} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Occupation" secondary={values.occupation} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Bio" secondary={values.bio} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="city" secondary={values.city} />
        </ListItem>

        <Divider />
      </List>

      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button variant="contained" color="default" onClick={prevStep}>
          Back
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Confirm & Continue
        </Button>
      </div>
    </div>
  );
};

export default Confirm;
