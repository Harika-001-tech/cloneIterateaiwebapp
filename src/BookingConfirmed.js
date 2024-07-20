import {
    Container,
    Button,
    CardHeader,
  } from "@mui/material";
  import Header from "./Header";
  import { Link } from "react-router-dom";
  import * as React from "react";
  import Card from "@mui/material/Card";
  import CardActions from "@mui/material/CardActions";
  import CardContent from "@mui/material/CardContent";
  
const BookingConfirmed = () => {
  return (
    <>
      <Header />
      <Container maxWidth="1000" sx={{ width: 1000 }}>
       <Card>
        <CardHeader>
            Your booking has been confirmed
        </CardHeader>
        <CardContent>
            Thank you for booking in Sri Mandir
        </CardContent>
        <CardActions>
            <Button component={Link} to={"/"}>Go To Home</Button>
        </CardActions>
       </Card>
      </Container>
    </>
  );
};

export default BookingConfirmed;
