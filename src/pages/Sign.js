import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import registeredOption from "../utils/options";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "cursive"].join(","),
  },
});

const Sign = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onClick = () => navigate("/home");

  function Input(props) {
    return (
      <TextField
        fullWidth
        margin="normal"
        label={props.label}
        {...register(props.nome, props.options)}
        error={
          (props.error === "required" && true) ||
          (props.error === "pattern" && true)
        }
        helperText={
          (props.error === "required" && "Valor requerido.") ||
          (props.error === "pattern" && "Formato inválido.")
        }
      />
    );
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: "5",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ background: "#27314a", m: "2vh" }}></Avatar>
            <Typography component="h1" variant="h5" sx={{ fontWeight: "600" }}>
              Dados Pessoais
            </Typography>
            <Box component="form">
              <Input
                error={errors?.nome?.type}
                label="Nome"
                nome="nome"
                options={registeredOption.nome}
              />
              <Input
                error={errors?.email?.type}
                label="Email"
                nome="email"
                options={registeredOption.email}
              />
              <Input
                error={errors?.telefone?.type}
                label="Telefone"
                nome="telefone"
                options={registeredOption.telefone}
              />
              <Input
                error={errors?.cpf?.type}
                label="CPF"
                nome="cpf"
                options={registeredOption.cpf}
              />
              <Button
                sx={{
                  background: "#27314a",
                  borderRadius: "30px",
                  color: "#959aad",
                  height: "45px",
                  m: "2vh 0",
                }}
                onClick={handleSubmit(onClick)}
                type="submit"
                fullWidth
                variant="contained"
              >
                Entrar
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Routes>
        <Route element={<Home />} path="/home" />
      </Routes>
    </>
  );
};
export default Sign;
