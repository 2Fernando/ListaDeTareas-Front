"use client";

import Button from "@mui/material/Button";
import { cerrarSesion } from "src/api/usuario";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  const cerrarSesionClick = () => {
    cerrarSesion().then(() => {
      router.replace("/inicio-sesion");
    });
  };

  return (
    <Button color="error" onClick={cerrarSesionClick} variant="contained">
      Cerrar sesion
    </Button>
  );
};

export default Logout;
