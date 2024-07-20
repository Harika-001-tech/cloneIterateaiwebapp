import { Container, Box, Button, Divider, Grid } from "@mui/material";
import Header from "./Header";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormDialog from "./PersonForm";

const PakageOptions = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header />
      <Container maxWidth="1000" sx={{ width: 1000 }}>
        <Box marginTop={2}>
        Home -- Sri Mandir Pooja seva
        <Divider />
        About Pooja -- Benefits -- Packages
        <Divider />
        </Box>
        <Grid container justifyContent="center" spacing={1}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <BasicCard
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
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
        <FormDialog open={open} handleClose={handleClose}/>
      </Container>
    </>
  );
};

export function BasicCard(props) {
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
          Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Participate Now!
        </Typography>
        <Typography variant="body2">
          Book online puja with Sri Mandir in more than 500+ temples across India. Receive video of the puja along with the Prasad and receive blessings from the divine for prosperity and well-being of you and your family

          <br />
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained"  onClick={props.handleClickOpen}>Participate</Button>
      </CardActions>
    </Card>
  );
}

export default PakageOptions;
