import { Container, Box, Button, Divider, Grid } from "@mui/material";
import Header from "./Header";
import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PoojaDetail = () => {
  return (
    <>
      <Header />
      <Container maxWidth="1000" sx={{ width: 1000 }}>
        <Box marginTop={2}>
          Home -- Sri Mandir Pooja seva
          <Divider />
        </Box>
        <Grid container justifyContent="center" spacing={1} marginTop={2}>
          <Grid item>
            <img
              srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
              src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=400&fit=crop&auto=format`}
              alt={"breakfast"}
              loading="lazy"
            />
          </Grid>
          <Grid item>
            <DetailsCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export function DetailsCard() {
  return (
    <Card
      sx={{
        height: 400,
        width: 400,
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
        <Button variant="contained" component={Link} to={"/PackageOptions"}>
          Select Pooja Package
        </Button>
      </CardActions>
    </Card>
  );
}

export default PoojaDetail;
