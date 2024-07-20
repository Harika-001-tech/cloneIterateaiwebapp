import {
  Container,
  Box,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import Header from "./Header";
import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ReviewBooking = () => {
  return (
    <>
      <Header />
      <Container maxWidth="1000" sx={{ width: 1000 }}>
        <Box marginTop={2}>
          Add Details --Review booking -- Fill Name -- Make payment
          <Divider />
          Review booking
          <Divider />
        </Box>
        <Grid container justifyContent="center" spacing={1} marginTop={2}>
          <Grid item xs={6}>
            <DetailsCard showButton={true} />
          </Grid>
          <Grid item xs={6}>
            <DetailsCard showButton={false} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export function DetailsCard({ showButton }) {
  return (
    <Card
      sx={{
        height: 400,
        width: 450,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        {showButton && (
          <Button variant="contained" component={Link} to={"/BookingConfirmed"}>
            Make Payment
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ReviewBooking;
