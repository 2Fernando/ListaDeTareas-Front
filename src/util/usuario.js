const registrarse = (datosRegistro) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  const nuevoUsuario = [
    ...usuarios,
    {
      usuario: datosRegistro.usuario,
      password: datosRegistro.password,
    },
  ];

  localStorage.setItem("usuarios", JSON.stringify(nuevoUsuario));
};

const inicioSesion = (datosInicioSesion) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  const usuarioExistente = usuarios.find((usuario) => {
    return usuario.usuario === datosInicioSesion.usuario;
  });

  if (usuarioExistente) {
    if (usuarioExistente.password === datosInicioSesion.password) {
      return true;
    }

    return false;
  }

  return false;
};

export { registrarse, inicioSesion };
