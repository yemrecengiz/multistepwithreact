import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { List, ListItem , ListItemText} from "@material-ui/core";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values } = this.props;
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
              Success
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography style={{ marginTop: 40 }}>Result</Typography>
        
        <div>
            Added Successfully
        </div>
      </div>
    );
  }
}

export default FormPersonalDetails;
