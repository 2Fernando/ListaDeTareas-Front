"use client";

import React from "react";

import { FormControl } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { inicioSesion } from "src/api/usuario";

import { useRouter } from "next/navigation";

const InicioSesion = () => {
  const router = useRouter();

  const [mensajeError, setMensajeError] = React.useState("");

  const [usuario, setUsuario] = React.useState("");
  const [password, setPassword] = React.useState("");

  const usuarioOnChange = (event) => {
    setUsuario(event.target.value);
  };

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const iniciarSesionClick = () => {
    const datosRegistro = {
      usuario,
      password,
    };

    inicioSesion(datosRegistro).then((resultado) => {
      if (resultado.respuesta === "usuario existente") {
        router.replace("/listado-tareas");
      } else {
        setMensajeError(resultado.respuesta);
      }
    });
  };

  const registrarseClick = () => {
    router.replace("/registro");
  };

  return (
    <Grid container className="formulario-inicio-sesion">
      <Grid item mb={4}>
        <Typography variant="h5">Iniciar sesion</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs="auto">
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
          </Grid>
          <Grid item xs="auto">
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
          </Grid>
          {mensajeError && (
            <Grid>
              <Typography color={"error"}>{mensajeError}</Typography>
            </Grid>
          )}
          <Grid item my={3}>
            <Button onClick={iniciarSesionClick} variant="contained">
              Iniciar sesion
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button onClick={registrarseClick} variant="text">
              Registrarse
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InicioSesion;
