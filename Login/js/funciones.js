//DEF Obtener Usuarios de LS
function obtenerListaUsuarios(){
  let listaUsuariosTxt = localStorage.getItem('listaUsuarios');
  let listaUsuarios = [];

  if(listaUsuariosTxt) {
    listaUsuarios = JSON.parse(listaUsuariosTxt);
  } else {
    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios)); 
}
  return listaUsuarios;
}

//DEF guardarUsuario en LS
function guardarUsuario(key, usuario) {
  localStorage.setItem(key, JSON.stringify(usuario));
  console.log('Usuario guardado en LS');
}

//DEF Validar usuario y passw, en Login
function validarUsuario(listaUsuarios, usuario_imput, pass_imput) {
  let usuarioLogueado;
  listaUsuarios.forEach(usuario => {
      if (usuario.user == usuario_imput) {
        if(usuario.pass == pass_imput) {
          usuarioLogueado = usuario;
        }
      }
    });
    return usuarioLogueado;
}

//DEF Validar solo usuario cuando se edita el nuevo nombre de usuario
function validarUsuarioDisponible(listaUsuarios, nuevoUser) {
  let userDisponible=true;
  listaUsuarios.forEach(usuario => {
      if (usuario.user == nuevoUser) {
        userDisponible = false  
      }
    });
    return userDisponible;
}


//DEF Validar usuario en existencia, en Registrar
function validarNombreDeUsuario(listaUsuarios, usuario_imput) {
  let usuarioOcupado = false;
  listaUsuarios.forEach(usuario => {
      if (usuario.user == usuario_imput)
          usuarioOcupado = true;
    });
    return usuarioOcupado;
}

//DEF Borrar Sesion del boton logout
function borrarSesion() {
  //Borro el usuarioLogueado
  localStorage.removeItem('usuarioLogueado');
  //Si existe algun indice lo borro
  if(localStorage.getItem('indiceUsuario'))
    localStorage.removeItem('indiceUsuario');
  // Redirect
  window.location.href = "./index.html";
}
