// Obtener la hora actual sin segundos
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

// Formatear la hora sin segundos
const time = hours + ":" + (minutes < 10 ? "0" : "") + minutes;

// Mostrar la hora en el elemento correspondiente
const timeElement = document.getElementById("clock");
timeElement.textContent = time;

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
    window.location.href = "../pages/wsp_trucho.html";
  };

  // Función para manejar el clic en el botón "Cancelar"
  const cancel = () => {
    closePopup();
    showTimeout = setTimeout(showPopup, 2000); // Volver a mostrar la ventana después de 5 segundos (5000 milisegundos)
  };

  // Agregar eventos a los botones
  const acceptButton = popup.querySelector(".buttons button:first-of-type");
  const cancelButton = popup.querySelector(".buttons button:last-of-type");
  acceptButton.addEventListener("click", accept);
  cancelButton.addEventListener("click", cancel);
});
