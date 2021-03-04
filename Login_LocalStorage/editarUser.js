//recupero el listado
let listaUsuarios = obtenerListaUsuarios();
//recupero el indice del usuario a editar
let indice = (localStorage.getItem('indiceUsuario')-1);
//usuario a editar
let usuarioAModificar = listaUsuarios[indice];

//muestro form
window.onload = function() {
  //muestro datos user
  document.getElementById("user").value = usuarioAModificar.user;
  document.getElementById("pass").value = usuarioAModificar.pass;
  document.getElementById("mail").value = usuarioAModificar.mail;
  document.getElementById("celular").value = usuarioAModificar.celular;
  if(usuarioAModificar.admin == true) {
    document.getElementById("admin").checked = true;
  }else {
  document.getElementById("noadmin").checked = true;
  }
};

//event del boton editar
document.getElementById('form-editar').addEventListener('submit', function(e){
  // Obtengo los datos nuevos de los inputs
  let nuevoUser = document.getElementById("user").value;
  let nuevoPass = document.getElementById("pass").value;
  let nuevoCelular = document.getElementById("celular").value;
  let nuevoAdmin = false;
  if(document.getElementById('admin').checked == true) {
    nuevoAdmin = true;
  }
  // Valido si el nuevo user ya existe
  let usuarioDisponible = validarUsuarioDisponible(listaUsuarios, nuevoUser);
  if (usuarioDisponible = true) {
    usuarioAModificar.user = nuevoUser;
    usuarioAModificar.pass = nuevoPass;
    usuarioAModificar.celular = nuevoCelular;
    usuarioAModificar.admin = nuevoAdmin;

    console.log(usuarioAModificar);

    // Actualizo el usuarioAModificar a la lista
    listaUsuarios[indice] = usuarioAModificar;
    console.log('usuario actualizado');
    // Actualizo la lista en LS
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    console.log('lista de usuarios actualizada');
    
    // Redirect
    window.location.href = "./listadoUsuarios.html";
  } else {
    alert('Ese nombre de usuario no esta disponible');
  }
  e.preventDefault();
});

