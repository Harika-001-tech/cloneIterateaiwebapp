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
        <Button variant="contained"  component={Link} to={"/PoojaDetail"}>Participate</Button>
      </CardActions>
    </Card>
  );
}

export default PoojaOptions;
