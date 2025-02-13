const messages = [
  "Estás segura?",
  "Realmente segura??",
  "Confirmas tu respuesta?",
  "Por favor, cariño...",
  "Sólo piénsalo!",
  "Si dices que no, me pondré muy triste u.u...",
  "Me pondré muy triste...",
  "Me pondré muy muy muy triste...",
  "Ok, está bien, dejaré de preguntar...",
  "Es broma, por favor dime que sí! ❤️",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
