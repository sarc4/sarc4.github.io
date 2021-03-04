// Creo eventListener en el boton Iniciar Sesion
document.getElementById('login').addEventListener('submit', function(e){
  // Obtengo lista de usuarios de LS
  let listaUsuarios = obtenerListaUsuarios();

  // Obtengo usuario/pass de imput
  let usuario_imput = document.getElementById("user").value;
  let pass_imput = document.getElementById("pass").value;

  // Valido el user con la lista de usuarios
  let usuarioLogueado = validarUsuario(listaUsuarios, usuario_imput, pass_imput);
  if (usuarioLogueado != undefined) {
    // Guardo usuarioLogueado en LS
    guardarUsuario('usuarioLogueado', usuarioLogueado);
    // Redirect
    window.location.href = "./perfil.html";
  } else {
    alert('Usuario o Contraseña incorrecta');
  }
  e.preventDefault();
});




