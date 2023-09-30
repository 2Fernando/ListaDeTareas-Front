"use client";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { editarTarea, quitarTarea } from "src/api/tarea";

const Tarea = ({ tarea, quitarCorrecto, realizadaCorrecto }) => {
  const router = useRouter();

  const quitarTareaClick = () => {
    quitarTarea(tarea.id).then(() => {
      quitarCorrecto(tarea.id);
    });
  };

  const editarTareaClick = () => {
    router.replace(`/editar-tarea/${tarea.id}`);
  };

  const realizarTareaClick = () => {
    const datosTarea = {
      id: tarea.id,
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      realizada: !tarea.realizada,
    };

    editarTarea(datosTarea).then(() => {
      realizadaCorrecto(datosTarea);
    });
  };

  return (
    <Grid
      xs={12}
      item
      className={tarea.realizada ? "item-tarea realizada" : "item-tarea"}
    >
      <Grid container justifyContent="space-between">
        <Grid item>
          <Grid item xs={12}>
            <Typography className="titulo-tarea">{tarea.titulo}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="descripcion-tarea">
              {tarea.descripcion}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container gap={2}>
            <Grid>
              <Button
                variant="contained"
                color="error"
                onClick={quitarTareaClick}
              >
                Quitar
              </Button>
            </Grid>
            <Grid>
              <Button variant="contained" onClick={editarTareaClick}>
                Editar
              </Button>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                onClick={realizarTareaClick}
                color="success"
              >
                Realizada
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Tarea;
