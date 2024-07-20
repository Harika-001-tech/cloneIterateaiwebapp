import { Container, Box, Paper, Button, Divider } from "@mui/material";
import Header from "./Header";
import { Link } from "react-router-dom";

const MyBookings = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{}}>
        <Box marginTop={2}>
          <Paper sx={{ width: 900, height: 400 }}>
            No History
            <Divider />
            <b>No Pooja has been booked yet</b>
            <p>
              Book your pooja online at popular temples of India. PaditJi will
              take sankalp with your name and gotra during the pooja
              <Button variant="contained" component={Link} to={"/PoojaOptions"}>
                Book Pooja Now
              </Button>
            </p>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default MyBookings;
