const chatContainer = document.getElementById("chat");

let index = 0;
const interval = setInterval(() => {
  if (index < conversation.length) {
    const message = conversation[index];

    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(message.Author);

    const textElement = document.createElement("p");
    textElement.textContent = message.text;

    messageElement.appendChild(textElement);
    chatContainer.appendChild(messageElement);

    index++;
  } else {
    clearInterval(interval);
  }
}, 6000);

const conversation = [
  {
    Author: "girl",
    text: "¿Hola?",
  },
  { Author: "you", text: " ¿Qué es esto?" },
  {
    Author: "girl",
    text: " No lo sé, me dijeron que ibas a ayudarme a escapar",
  },
  { Author: "you", text: " ¿Escapar de dónde?" },
  {
    Author: "girl",
    text: " No sé de dónde, sólo sé que estaba caminando normalmente por la calle, cuando me tropiezo y momentos después desperté en este lugar.",
  },
  { Author: "you", text: " No te entiendo nada." },
  { Author: "girl", text: " ¿No te habló un número desconocido? " },
  {
    Author: "you",
    text: " Sí, me avisó de la aplicación de Nexus y me dijo que la abriera, no sé para qué le hice caso. ",
  },
];
