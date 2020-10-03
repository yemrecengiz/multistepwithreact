import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { TextField } from "@material-ui/core";

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
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
              Form Personal Details
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <TextField
            style={{ width: 400, marginTop: 30 }}
            helperText="Occupation"
            margin="normal"
            placeholder="Enter Your Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            style={{ width: 400 }}
            helperText="City"
            margin="normal"
            placeholder="Enter Your City"
            onChange={handleChange("city")}
            defaultValue={values.city}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            style={{ width: 400 }}
            helperText="Bio"
            margin="normal"
            placeholder="Enter Your Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
            variant="outlined"
          />
        </div>
        <div>
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.back}
          style={{ width: 200 }}>
            Back
          </Button>
          <span> </span>
          <Button
          variant="contained"
          color="primary"
          onClick={this.continue}
          style={{ width: 200 }}>
            Continue
          </Button>
        </div>
      </div>
    );
  }
}

export default FormPersonalDetails;
