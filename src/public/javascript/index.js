const socket = io();
let user;
let chatBox = document.getElementById("chatBox");

Swal.fire({
 title: "Identificate",
 input: "text",
 text: "Ingresa el usuario para identificarte en el chat",
 inputValidator: (value) => {
  return !value && "Necesitas escribir un nombre de usuario para continuar!";
 },
 allowOutsideClick: false
}).then(result => {
 user = result.value;
});

chatBox.addEventListener("keyup", e => {
 if (e.key === "Enter") {
  if(chatBox.value.trim().length > 0) {
   socket.emit("message", {user:user, message: chatBox.value});
   chatBox.value="";
  };
 };
});

socket.on("messageLogs", data => {
 let log = document.getElementById("messageLogs");
 let messages = "";
 
 data.forEach(message => {
  messages = messages + `${message.user} dice: ${message.message}`
 });

 log.innerHTML = messages;
});

// Swal.fire({
//  text: "Nuevo usuario conectado",
//  toast: true,
//  position: "Top-right",
// });