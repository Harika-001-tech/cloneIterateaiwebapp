import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function FormDialog(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          props.handleClose();
        },
      }}
    >
      <DialogTitle>Fill your details for pooja</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter your whattsap mobile number</DialogContentText>
        <Box component="form">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                id="number"
                name="number"
                label="Your mobile number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <b>Enter your name</b>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="name"
                name="name"
                label="Your full name"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button type="submit" variant="contained" component={Link} to={"/ReviewBooking"}>Next</Button>
      </DialogActions>
    </Dialog>
  );
}
