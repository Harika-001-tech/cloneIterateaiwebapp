import Header from "./Header";
import * as React from "react";
import Container from "@mui/material/Container";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Header />
      <Container sx={{ bgcolor: "#FEF5EC" }} minHeight="600">
      <Grid
        marginTop={1}
        container
        spacing={1}
        maxWidth={800}        
      >
        <Grid item xs={6} minWidth={400} minHeight={400}>
          <Card minWidth={400} minHeight={400} sx={{ bgcolor: "unset", boxShadow:"unset"}}>
            <CardHeader>World's largest app for hindu devotees</CardHeader>
            <CardContent minWidth={400} minHeight={400}>
              <Typography variant="h3">
                Pray Daily with Sri Mandir One App for all your devotional needs
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} minWidth={400} minHeight={400}>
          <Card sx={{ bgcolor: "unset", boxShadow:"unset" }}>
            <img
              width={400}
              height={400}
              srcSet={`/img_hero_artwork_en.webp?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
              src={`/img_hero_artwork_en.webp?w=400&h=400&fit=crop&auto=format`}
              alt={"idol"}
              loading="lazy"
            />
          </Card>
        </Grid>
      </Grid>
      </Container>
    </>
  );
};

export default Home;
