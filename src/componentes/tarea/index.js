"use client";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Tarea = ({ tarea }) => {
  return (
    <Grid xs={12} item className="item-tarea">
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
              <Button variant="outlined" color="error">
                Quitar
              </Button>
            </Grid>
            <Grid>
              <Button variant="outlined">Editar</Button>
            </Grid>
            <Grid>
              <Button variant="outlined" color="success">
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
