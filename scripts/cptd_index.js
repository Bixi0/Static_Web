//Alert Message!!//

window.addEventListener("load", () => {
  const popup = document.getElementById("popup");
  let showTimeout;

  // Función para mostrar la ventana emergente después de un retraso
  const showPopup = () => {
    popup.style.display = "block";
  };

  // Mostrar la ventana emergente después de 3 segundos (3000 milisegundos)
  showTimeout = setTimeout(showPopup, 3000);

  // Función para cerrar la ventana emergente
  const closePopup = () => {
    popup.style.display = "none";
  };

  // Función para manejar el clic en el botón "Aceptar"
  const accept = () => {
    closePopup();
    clearTimeout(showTimeout); // Cancelar el timeout existente
    // Redirigir a otro archivo HTML
    window.location.href = "/pages/cptd_wsp.html";
  };

  // Agregar eventos aL botón
  const acceptButton = popup.querySelector(".button button:first-of-type");
  acceptButton.addEventListener("click", accept);
});
