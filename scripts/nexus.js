setTimeout(function () {
  // Redirigir a otra página HTML después de completar el reinicio
  window.location.href = "cptd_wsp.html";
}, 5300); // Tiempo de espera después de ocultar la pantalla en negro
function iniciarProgreso() {
  var progressBar = document.getElementById("loading-bar");
  var pantalla = document.getElementById("screen");

  // Mostrar la pantalla en negro gradualmente
  pantalla.style.opacity = "1";

  var width = 0;
  var id = setInterval(frame, 53);

  function frame() {
    if (width >= 100) {
      clearInterval(id);

      // Ocultar la pantalla en negro gradualmente
      pantalla.style.opacity = "0";
    } else {
      width++;
      progressBar.style.width = width + "%";
    }
  }
}

// Llamada a la función para iniciar el progreso
iniciarProgreso();
