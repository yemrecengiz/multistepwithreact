import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { TextField } from "@material-ui/core";

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              style={{ marginRight: "1rem" }}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography style={{}} variant="h6">
              Form User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <TextField
            style={{ width: 400, marginTop: 30 }}
            helperText="First Name"
            margin="normal"
            placeholder="Enter Your First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            style={{ width: 400 }}
            helperText="Last Name"
            margin="normal"
            placeholder="Enter Your Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            style={{ width: 400 }}
            helperText="Email"
            margin="normal"
            placeholder="Enter Your Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            variant="outlined"
          />
        </div>
        <div>
          <Button
          variant="contained"
          color="primary"
          onClick={this.continue}
          style={{ width: 400 }}>
            Continue
          </Button>
        </div>
      </div>
    );
  }
}

export default FormUserDetails;
