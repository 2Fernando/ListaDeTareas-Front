"use client";

import React from "react";

import { FormControl } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { agregarTarea } from "src/util/tarea";

import { useRouter } from "next/navigation";

const EditarTarea = ({ params }) => {
  console.log(params);

  const router = useRouter();

  const [titulo, setTitulo] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");

  const tituloOnChange = (event) => {
    setTitulo(event.target.value);
  };

  const descripcionOnChange = (event) => {
    setDescripcion(event.target.value);
  };

  const editarTareaClick = () => {
    const datosNuevaTarea = {
      titulo,
      descripcion,
    };

    editarTarea(datosNuevaTarea);
    router.replace("/listado-tareas");
  };

  const listadoTareaClick = () => {
    router.replace("/listado-tareas");
  };

  return (
    <Grid container className="formulario-editar-tarea">
      <Grid item mb={4}>
        <Typography variant="h5">Editar Tarea</Typography>
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
        <Grid item>
          <Button onClick={listadoTareaClick} variant="text">
            Listado Tarea
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditarTarea;
