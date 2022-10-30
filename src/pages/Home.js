import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import PublicIcon from "@mui/icons-material/Public";
import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "cursive"].join(","),
  },
});

const Home = () => {
  const urlCity = "https://amazon-api.sellead.com/city";
  const urlCountry = "https://amazon-api.sellead.com/country";

  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  // ----------------------------------------------------API for Countries
  useEffect(() => {
    fetch(urlCountry)
      .then((res) => res.json())
      .then(
        (result) => {
          setCountries(result);
        },
        () => {
          alert("Houve um erro, tente novamente!");
        }
      );
  }, []);

  // // -------------------------------------------------API for Cities
  useEffect(() => {
    fetch(urlCity)
      .then((res) => res.json())
      .then(
        (result) => {
          setCities(result);
        },
        () => {
          alert("Houve um erro, tente novamente!");
        }
      );
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <AppBar
          sx={{
            background: "#27314a",
            borderRadius: "30px",
            color: "#959aad",
            m: "20px 0",
            position: "relative",
          }}
        >
          <Toolbar variant="dense">
            <Grid
              sx={{ alignItems: "center", justifyContent: "center" }}
              container
            >
              <PublicIcon />
              <Typography sx={{ fontWeight: "600" }} item variant="h6">
                Enjoy the World!
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <FormControl size="small" fullWidth>
                <InputLabel>País</InputLabel>
                <Select
                  sx={{
                    borderRadius: "30px",
                  }}
                  label="País"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  {countries.map((item) => (
                    <MenuItem key={item.code} value={item.code}>
                      {item.name_ptbr}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl size="small" fullWidth>
                <InputLabel>Cidade</InputLabel>
                <Select
                  sx={{
                    borderRadius: "30px",
                  }}
                  label="País"
                  value={selectedCity}
                  onChange={handleCityChange}
                  multiple
                >
                  {cities.map(
                    (item) =>
                      item.country_code === selectedCountry && (
                        <MenuItem key={item.id} value={item.name}>
                          {item.name}
                        </MenuItem>
                      )
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={12}>
              <Box
                sx={{
                  margin: "3.5vh 0",
                }}
              >
                {selectedCity.map((item) => (
                  <Chip
                    sx={{
                      alignItems: "center",
                      background: "#ffeabf",
                      color: "#27314a",
                      justifyContent: "center",
                      margin: "5px",
                    }}
                    label={item}
                    variant="filled"
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Home;
