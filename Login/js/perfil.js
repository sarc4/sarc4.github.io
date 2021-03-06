window.onload = function() {
  //recupero el string
  let txtUsuarioLogueado = localStorage.getItem("usuarioLogueado");

  //lo paso a obj
  let usuarioLogueado = JSON.parse(txtUsuarioLogueado);  
  
  //Inserto los valores en HTML
  document.getElementById("user").innerHTML = usuarioLogueado.user;
  document.getElementById("mail").innerHTML = usuarioLogueado.mail;
  document.getElementById("celular").innerHTML = usuarioLogueado.celular;
  
  // Es admin?
  if(usuarioLogueado.admin == true) {
    document.querySelector("h1").innerHTML = (`MENU ADMIN`);
    //Muestro boton editar Users
    document.getElementById('editarUsuarios').style.display='block';

  } else {
    document.querySelector("h1").innerHTML = (`MENU USUARIO`);
  }
};

// Event listener del boton editarUsuarios
document.getElementById('editarUsuarios').addEventListener('click', function(e){
  // Redirect
  window.location.href = "./listado.html";

  e.preventDefault();
});

// Event listener del botonLogout
document.getElementById('botonLogout').addEventListener('click', function(e){
  borrarSesion();
  e.preventDefault();
});


