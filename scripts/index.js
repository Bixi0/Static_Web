//Alert Message!!//

/*Swal.fire({
  title: "Mensaje de número desconocido",
  text: "Deseas agregar como contacto?",
  icon: "warning",
  width: "50%",
  backdrop: "true",
  timer: "6000",
  timerProgressBar: "true",
  position: "center",
  showConfirmButtonText: "true",
  showCancelButton: "true",
  showCloseButton: "true",
});*/

// Obtener la hora actual sin segundos
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();

// Formatear la hora sin segundos
var time = hours + ":" + (minutes < 10 ? "0" : "") + minutes;

// Mostrar la hora en el elemento correspondiente
var timeElement = document.getElementById("clock");
timeElement.textContent = time;

//Alert Message!!//

window.addEventListener("load", function () {
  var popup = document.getElementById("popup");
  var showTimeout;

  // Función para mostrar la ventana emergente después de un retraso
  function showPopup() {
    popup.style.display = "block";
  }

  // Mostrar la ventana emergente después de 3 segundos (3000 milisegundos)
  showTimeout = setTimeout(showPopup, 3000);

  // Función para cerrar la ventana emergente
  function closePopup() {
    popup.style.display = "none";
  }

  // Función para manejar el clic en el botón "Aceptar"
  function accept() {
    closePopup();
    clearTimeout(showTimeout); // Cancelar el timeout existente
    // Redirigir a otro archivo HTML
    window.location.href = "/pages/wsp_trucho.html";
  }

  // Función para manejar el clic en el botón "Cancelar"
  function cancel() {
    closePopup();
    showTimeout = setTimeout(showPopup, 2000); // Volver a mostrar la ventana después de 5 segundos (5000 milisegundos)
  }

  // Agregar eventos a los botones
  var acceptButton = popup.querySelector(".buttons button:first-of-type");
  var cancelButton = popup.querySelector(".buttons button:last-of-type");
  acceptButton.addEventListener("click", accept);
  cancelButton.addEventListener("click", cancel);
});
