alert("Bienvenido a nuestra tienda de relojes.") + alert("Actualmente ofrecemos descuento del 30%.") + alert("Por que reloj desea consultar el precio?");

let oferta;

do {
 oferta = prompt("Tenemos estos relojes: Reloj Basico, Reloj CASIO, Reloj SEIKO, Rolex Negro, o Reloj CITIZEN").toLowerCase();
 
 let precio;
 
 if (oferta === "reloj basico") {
  precio = 5;
 } else if (oferta === "reloj casio") {
  precio = 50;
 } else if (oferta === "reloj seiko") {
  precio = 250;
 } else if (oferta === "rolex negro") {
  precio = 500;
 } else if (oferta === "reloj citizen") {
  precio = 1500;
 } else {
  alert("No tenemos ese reloj, por favor ingrese otro.");
  continue;
 }
 
 const usuarioDescuento = prompt("¿Tienes descuento? Si o no??").toLowerCase();
 
 function descuento(precio) {
  if (usuarioDescuento === "si") {
   return precio - ((precio * 30) / 100);
  } else if (usuarioDescuento === "no") {
   return precio;
  }
 }

 precio = descuento(precio);

 const IVA = 1.21;

 function iva(precio) {
  return precio * IVA;
 }
 
 const total = iva(precio);

 console.log("El reloj cuesta: $" + total);
 alert("El reloj cuesta: $" + total);
 
} while(!(oferta === "reloj basico" || oferta === "reloj casio" || oferta === "reloj seiko" || oferta === "rolex negro" || oferta === "reloj citizen"));