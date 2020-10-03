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
              Confirm
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography style={{ marginTop: 40 }}>Details</Typography>
        <List
          style={{
            width: 500,
            position: "relative",
            margin: "auto",
            marginTop: 30,
          }}
        >
          <ListItem button> <ListItemText  primary="First Name" /> {values.firstName}</ListItem>
          <ListItem button> <ListItemText  primary="Last Name" /> {values.lastName}</ListItem>
          <ListItem button> <ListItemText  primary="Email" /> {values.email}</ListItem>
          <ListItem button> <ListItemText  primary="Occupation" /> {values.occupation}</ListItem>
          <ListItem button> <ListItemText  primary="City" /> {values.city}</ListItem>
          <ListItem button> <ListItemText  primary="Bio" /> {values.bio}</ListItem>
          <ListItem>
              
          </ListItem>
        </List>
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.back}
          style={{ width: 240, marginTop:20 }}>
            Back
          </Button>
          <span> </span>
          <Button
          variant="contained"
          color="primary"
          onClick={this.continue}
          style={{ width: 240, marginTop:20 }}>
            Continue & Confirm
          </Button>
      </div>
    );
  }
}

export default FormPersonalDetails;
