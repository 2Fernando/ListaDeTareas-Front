const agregarTarea = (datosTarea) => {
  const tareas = JSON.parse(localStorage.getItem("tareas") || "[]");

  const nuevaTarea = [
    ...tareas,
    {
      titulo: datosTarea.titulo,
      descripcion: datosTarea.descripcion,
    },
  ];

  localStorage.setItem("tareas", JSON.stringify(nuevaTarea));
};

const obtenerListadoTareas = () => {
  const tareas = JSON.parse(localStorage.getItem("tareas") || "[]");
  return tareas;
};

export { agregarTarea, obtenerListadoTareas };
