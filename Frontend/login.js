// Verificar si el usuario está logueado
function verificarLogueo() {
    let usuario = sessionStorage.getItem("usuario");
    if (!usuario) {
      window.location.href = "login.html";
    }
  }
  
  // Redirigir a la página de inicio si el usuario está logueado
  function redirigirInicio() {
    let usuario = sessionStorage.getItem("usuario");
    if (usuario) {
      window.location.href = "index.html";
    }
  }

  // Cerrar sesión
function cerrarSesion() {
    sessionStorage.removeItem("usuario");
    window.location.href = "login.html";
  }