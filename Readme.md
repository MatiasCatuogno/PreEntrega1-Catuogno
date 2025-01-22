Bueno, dejé todo el código documentado por mi como pidió Javi.

Script Nodemon: "npm start"

Aviso: La ruta /api/carts/:cid/product/:pid crea un objeto AUTOMÁTICO con las propiedades necesarias, no es necesario ingresárselo a travez de POSTMAN con el método POST.

Para la ruta /api/products/ crea un objeto con el método POST utilizando POSTMAN pero ahí si hay que indicarle bien las propiedades que indica la cosnigna, que es la siguiente estructura:

{
 "title": "",
 "description": "",
 "code": 555,
 "price": 555,
 "stock": true, <!--(si colocas true o false, automáticamente lo toma como true por la consigna, pero si no lo agregas tira error por la validación creada de los campos.)
 "category": "",
 "thumbnails": []
}