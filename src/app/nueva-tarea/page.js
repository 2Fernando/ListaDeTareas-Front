"use client";

import React from "react";

import { FormControl } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { agregarTarea } from "src/api/tarea";

import { useRouter } from "next/navigation";

const NuevaTarea = () => {
  const router = useRouter();

  const [titulo, setTitulo] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");

  const tituloOnChange = (event) => {
    setTitulo(event.target.value);
  };

  const descripcionOnChange = (event) => {
    setDescripcion(event.target.value);
  };

  const nuevaTareaClick = () => {
    const datosNuevaTarea = {
      titulo,
      descripcion,
    };

    agregarTarea(datosNuevaTarea).then(() => {
      router.replace("/listado-tareas");
    });
  };

  const listadoTareaClick = () => {
    router.replace("/listado-tareas");
  };

  return (
    <Grid container className="formulario-nueva-tarea">
      <Grid item xs={12}>
        <Grid container justifyContent={"end"}>
          <Grid item xs={"auto"}>
            <Button onClick={listadoTareaClick} variant="contained">
              Listado Tarea
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item mb={4}>
        <Typography variant="h5">Nueva Tarea</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            color="warning"
            label="Titulo"
            value={titulo}
            onChange={tituloOnChange}
            placeholder="Ingrese Titulo"
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            color="warning"
            label="Descripcion"
            value={descripcion}
            onChange={descripcionOnChange}
            placeholder="Descripcion"
          />
        </FormControl>
        <Grid item sx={{ mb: 3 }}>
          <Button onClick={nuevaTareaClick} variant="contained">
            Nueva Tarea
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NuevaTarea;
