"use client";

import React, { useEffect } from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Tarea from "src/componentes/tarea";
import Logout from "src/componentes/logout";
import { obtenerListadoTareas } from "src/api/tarea";

import { useRouter } from "next/navigation";

const ListadoTareas = () => {
  const router = useRouter();
  const [listaTareas, setListaTareas] = React.useState([]);

  const nuevaTareaClick = () => {
    router.replace("/nueva-tarea");
  };

  const listadoTareas = () => {
    obtenerListadoTareas()
      .then((data) => {
        setListaTareas(data);
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  };

  const quitarCorrecto = (idTarea) => {
    setListaTareas((previousValues) => {
      return previousValues.filter((tarea) => tarea.id !== idTarea);
    });
  };

  const realizadaCorrecto = (tareaRealizada) => {
    setListaTareas((previousValues) => {
      return previousValues.map((tarea) =>
        tarea.id === tareaRealizada.id ? tareaRealizada : tarea
      );
    });
  };

  useEffect(() => {
    listadoTareas();
  }, []);

  return (
    <Grid
      container
      className="listado-tareas"
      justifyContent="space-between"
      mt={4}
    >
      <Grid item>
        <Logout />
      </Grid>
      <Grid item mb={4}>
        <Button onClick={nuevaTareaClick} variant="contained">
          Nueva Tarea
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" mb={3}>
          <Grid item xs="auto">
            <Typography variant="h4">Listado de Tareas</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" gap={1}>
          {listaTareas.map((tarea, index) => {
            return (
              <Tarea
                key={index}
                tarea={tarea}
                quitarCorrecto={quitarCorrecto}
                realizadaCorrecto={realizadaCorrecto}
              />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListadoTareas;
