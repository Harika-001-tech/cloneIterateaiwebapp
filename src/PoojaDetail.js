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
              srcSet={`https://cdn.pixabay.com/photo/2024/07/16/00/23/ai-generated-8898089_1280.jpg 2x`}
              src={`https://cdn.pixabay.com/photo/2024/07/16/00/23/ai-generated-8898089_1280.jpg`}
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
          Puja Seva for you and your loved ones

        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Book Pujas in your and your family's name at 1000+ renowned temples in India. You will also receive a video of the Puja and Prasad along with divine blessings.


        </Typography>
        <Typography variant="body2">
          Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir
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
