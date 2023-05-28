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

//Capture current time//

const time = document.getElementById("clock");

const interval = setInterval(() => {
  const currentTime = new Date();

  time.innerHTML = currentTime.toLocaleTimeString();
}, 1000);

//Alert Message!!//

document.addEventListener("DOMContentLoaded", function () {
  var popup = document.getElementById("popup");

  if (!sessionStorage.getItem("popupShown")) {
    popup.classList.remove("hidden");
    sessionStorage.setItem("popupShown", "true");
  }

  popup.addEventListener("animationend", function () {
    popup.classList.add("hidden");
  });
});

const mostrarVentanaEmergente = () => {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  setTimeout(
    (mostrarVentanaEmergente = () => {
      popup.style.display = "none";
    }),
    5000
  ); // Cerrar la ventana emergente después de 5 segundos (5000 milisegundos)
};

const aceptar = () => {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
  // Acá se puede agregar el código que se ejecutará cuando el usuario haga clic en "Aceptar"
};

const cancelar = () => {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
};
