// Creo eventListener en el boton Registrar
document.getElementById('form-register').addEventListener('submit', function(e){
  // Obtengo los datos de los inputs
  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;
  const mail = document.getElementById('mail').value;
  const celular = document.getElementById('celular').value;
  const admin = document.getElementById('admin').checked;



  // Obtengo lista de usuarios de LS
  let listaUsuarios = obtenerListaUsuarios();

  // Valido si el user ya existe
  let usuarioOcupado = validarUsuario(listaUsuarios, user);
  if (usuarioOcupado != true) {
    // Creo el Obj
    let nuevoUsuario = {
      user,
      pass,
      mail,
      celular,
      admin
      };

    // Agrego el nuevoUsuario a la lista
    listaUsuarios.push(nuevoUsuario);
    
    // Actualizo la lista en LS
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    
    // Redirect
    window.location.href = "./index.html";
  } else {
    alert('Ese nombre de usuario no esta disponible');
  }

  e.preventDefault();
});

/*************************/
