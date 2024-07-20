import { Container, Box, Button, Divider, Grid } from "@mui/material";
import Header from "./Header";
import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PoojaOptions = () => {
  return (
    <>
      <Header />
      <Container maxWidth="1000" sx={{ width: 1000 }}>
        <Box marginTop={2}>
          Filter options
          <Divider />
        </Box>
        <Grid container justifyContent="center" spacing={1}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <BasicCard
                sx={{
                  height: 400,
                  width: 300,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export function BasicCard() {
  return (
    <Card
      sx={{
        height: 400,
        width: 300,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek
              For Prevention of Misfortunes and Adversities
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Particpate Now!
        </Typography>
        <Typography variant="body2">
        Book online puja with Sri Mandir in more than 500+ temples across India. Receive video of the puja along with the Prasad and receive blessings from the divine for prosperity and well-being of you and your family

          <br />
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained"  component={Link} to={"/PoojaDetail"}>Participate</Button>
      </CardActions>
    </Card>
  );
}

export default PoojaOptions;
