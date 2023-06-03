setTimeout(() => {
  // Redirigir a otra página HTML después de completar el reinicio
  window.location.href = "../pages/cptd_index.html";
}, 5000); // Tiempo de espera después de ocultar la pantalla en negro
const iniciarProgreso = () => {
  const progressBar = document.getElementById("loading-bar");
  const screen = document.getElementById("screen");

  // Mostrar la pantalla en negro gradualmente
  // screen.style.opacity = "1";

  const width = 0;
  const id = setInterval(frame, 50);

  const frame = () => {
    if (width >= 100) {
      clearInterval(id);

      // Ocultar la pantalla en negro gradualmente
      pantalla.style.opacity = "0";
    } else {
      width++;
      progressBar.style.width = width + "%";
    }
  };
};

// Llamada a la función para iniciar el progreso
iniciarProgreso();
