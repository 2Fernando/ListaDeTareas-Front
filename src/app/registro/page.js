"use client";

import React from "react";

import { FormControl } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { registrarse } from "src/api/usuario";

import { useRouter } from "next/navigation";

const Registro = () => {
  const router = useRouter();

  const [usuario, setUsuario] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const usuarioOnChange = (event) => {
    setUsuario(event.target.value);
  };

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const registrarseClick = () => {
    const datosRegistro = {
      usuario,
      email,
      password,
    };

    registrarse(datosRegistro).then(() => {
      router.replace("/inicio-sesion");
    });
  };

  const iniciarSesionClick = () => {
    router.replace("/inicio-sesion");
  };

  return (
    <Grid container className="formulario-registro">
      <Grid item mb={4}>
        <Typography variant="h5">Registro</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            color="warning"
            label="Nombre Usuario"
            value={usuario}
            onChange={usuarioOnChange}
            placeholder="Nombre Usuario"
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            color="warning"
            label="Email"
            value={email}
            onChange={emailOnChange}
            placeholder="Email"
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            color="warning"
            label="Contraseña"
            value={password}
            type="password"
            onChange={passwordOnChange}
            placeholder="Contraseña"
          />
        </FormControl>
        <Grid item sx={{ mb: 3 }}>
          <Button onClick={registrarseClick} variant="contained">
            Registrarse
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={iniciarSesionClick} variant="text">
            Iniciar sesion
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Registro;
