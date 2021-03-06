//cuerpo de la tabla
const tbody = document.querySelector('tbody');
//recupero el listado
let listaUsuarios = obtenerListaUsuarios();

//muestro la tabla
window.onload = function() {
  let n = 1;
  listaUsuarios.forEach(usuario => {
    let tipo = 'user';
    if(usuario.admin == true) 
      tipo = 'admin';
    tbody.innerHTML += `
    <tr>
      <th scopte="row">${n}</th>
      <td>${usuario.user}</td>
      <td>${usuario.pass}</td>
      <td>${usuario.mail}</td>
      <td>${usuario.celular}</td>
      <td>${tipo}</td>
      <td><a href="./editarUser.html"><i class="fas fa-user-edit text-success"></i></a></td>
      <td><a href="#"><i class="fas fa-trash text-danger"></i></a></td>
    </tr>
    `;
    n++;
  });
};
  

// Event listener del icono editar
tbody.addEventListener('click', function(e) {
  let indice = (e.target.parentElement.parentElement.parentElement.firstElementChild.innerText);
  localStorage.setItem('indiceUsuario', indice);
});

// Event listener del icono delete
tbody.addEventListener('click', function(e) {
  //si estoy presionando el icono trash
  if(e.target.classList.contains("fa-trash")) {
    let indice = (e.target.parentElement.parentElement.parentElement.firstElementChild.innerText);
    //pregunto
    let result = confirm('Eliminar usuario?');
    if(result){
      console.log(listaUsuarios);
      //Elimino desde la posicion indice-1, 1 usuario
      listaUsuarios.splice(indice-1, 1);
      console.log('Usuario eliminado');
      // Actualizo la lista en LS
      localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
      console.log('lista de usuarios actualizada');
      //Vacio la lista
      tbody.innerHTML = ``;
      //Vuelvo a cargar la ventana
      window.onload();
    }
  }
});

// Event listener del botonLogout
document.getElementById('botonLogout').addEventListener('click', function(e){
    borrarSesion();
    e.preventDefault();
});