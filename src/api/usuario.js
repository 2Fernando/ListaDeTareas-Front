const registrarse = (datosRegistro) => {
  return fetch("/usuario/registro", {
    method: "POST",
    body: JSON.stringify(datosRegistro),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());
};

const inicioSesion = (datosInicioSesion) => {
  return fetch("/usuario/inicio-sesion", {
    method: "POST",
    body: JSON.stringify(datosInicioSesion),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());
};

const cerrarSesion = () => {
  return fetch("/usuario/cerrar-sesion", {
    method: "POST",
    body: {},
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());
};

export { registrarse, inicioSesion, cerrarSesion };
