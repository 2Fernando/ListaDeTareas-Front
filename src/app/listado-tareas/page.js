"use client";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Tarea from "src/componentes/tarea";
import { obtenerListadoTareas } from "src/util/tarea";

import { useRouter } from "next/navigation";

const ListadoTareas = () => {
  const router = useRouter();
  const nuevaTareaClick = () => {
    router.replace("/nueva-tarea");
  };

  const listadoTareas = () => {
    return obtenerListadoTareas();
  };

  return (
    <Grid container className="listado-tareas" justifyContent="center" mt={4}>
      <Grid item mb={4}>
        <Button onClick={nuevaTareaClick} variant="contained">
          Nueva Tarea
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs="auto">
            <Typography variant="h4">Listado de Tareas</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" gap={1}>
          {listadoTareas().map((tarea, index) => {
            return <Tarea key={index} tarea={tarea} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListadoTareas;
