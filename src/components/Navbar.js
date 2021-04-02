import { AppBar, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import "./FormUserDetails.css";

export const Navbar = (props) => {
  const theme = createMuiTheme();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">{props.title}</Typography>
            </Toolbar>
          </AppBar>
          {props.children}
        </React.Fragment>
      </MuiThemeProvider>
    </div>
  );
};
