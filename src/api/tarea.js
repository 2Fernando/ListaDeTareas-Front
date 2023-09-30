const editarTarea = (datosTarea) => {
  return fetch("/tareas/editar/" + datosTarea.id, {
    method: "PUT",
    body: JSON.stringify(datosTarea),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());
};

const agregarTarea = (datosTarea) => {
  return fetch("/tareas/crear", {
    method: "POST",
    body: JSON.stringify(datosTarea),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());
};

const obtenerListadoTareas = () => {
  return fetch("/tareas/listado", {
    method: "GET",
  }).then((response) => response.json());
};

const obtenerTarea = (idTarea) => {
  return fetch("/tareas/tarea/" + idTarea, {
    method: "GET",
  }).then((response) => response.json());
};

const quitarTarea = (idTarea) => {
  return fetch("/tareas/eliminar", {
    method: "DELETE",
    body: JSON.stringify({ id: idTarea }),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  }).then((response) => response.json());
};

export {
  editarTarea,
  agregarTarea,
  obtenerListadoTareas,
  obtenerTarea,
  quitarTarea,
};
