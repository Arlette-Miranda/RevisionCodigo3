// Tenemos un li de productos
/* Se identa el documento */
/* Se crea carpeta para imagenes */


/* Se modifica ruta de imagenes */
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "public/img/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "public/img/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "public/img/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "public/img/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "public/img/zapato-rojo.jpg" }
]; /* Se agrega ; */

/* Se renombra variable li, en todo el documento, para poner una variable que mencione a que se hace referencia */
const listaProducto = document.getElementById("lista-de-productos") /* Se corrige a solicitar por id en vez de name */
const inputDoc = document.querySelector('input'); /* Se renombra variable ya que no debe inciar con $ y se omite . en imput*/

/* Se define función que se llama al finalizar esta */
/* Se define el parameto que recibirá la función */
function displayProductos(objeto) {
  /* Se acomoda while dentro de función ya que hace referencia a child que se encuentran en esta funcion */
  while (listaProducto.firstChild) {
    listaProducto.removeChild(listaProducto.firstChild);
  }

  /* Se agregan ; dentro de for */

  for (let i = 0; i < objeto.length; i++) {
    /* Se renombra variable di a divProducto, para hacer mejor referncia */
    let divProducto = document.createElement("div"); /* Se cambia tipo de variable de var a let */
    divProducto.classList.add("producto");

    /* Se renombra variable ti a titulo, para hacer mejor referncia */
    let titulo = document.createElement("p"); /* Se cambia tipo de variable de var a let */
    titulo.classList.add("titulo");
    titulo.textContent = objeto[i].nombre;/* se pone el parametro de la función, objeto, en vez de producto */

    let imagen = document.createElement("img"); /* Se cambia tipo de variable de var a let */
    imagen.setAttribute('src', objeto[i].img); /* se pone el parametro de la función, objeto, en vez de producto */

    divProducto.appendChild(titulo); /* Se agrega ; */
    divProducto.appendChild(imagen); /* Se agrega ; */

    listaProducto.appendChild(divProducto); /* Se agrega ; */
  }
}
/* Se llama la función antes creada */
displayProductos(productos); /* se agrega ; */

/* Se acomoda la función filtrado antes de se llamada  en el botón*/
const filtrado = (productos, texto) => { /* Se quita =[] para definir el parametro productos */
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {

  const texto = inputDoc.value.toLocaleLowerCase();/* Se agrega lowercase para hacer mínusculas el input del usuario */
  console.log(texto); ///REVISAR ////

  const productosFiltrados = filtrado(productos, texto);

  displayProductos(productosFiltrados);

  /* Esta segundo for lo cometo para no eliminarlo,
  Pero se eliminaría ya que hace que al realizar el filtro el reusltado se duplique*/


  /*  for (let i = 0; i < productosFiltrados.length; i++) {
     // Se renombra variable para mayor referencia //
     let divFiltrados = document.createElement("div") // Se cambia tipo de variable de var a let 
     divFiltrados.classList.add("producto")
     
     // Se renombra variable para mayor referencia 
     let titutloFiltrados = document.createElement("p") // Se cambia tipo de variable de var a let
     titutloFiltrados.classList.add("titulo")
     titutloFiltrados.textContent = productosFiltrados[i].nombre
 
     let imagen = document.createElement("img"); // Se cambia tipo de variable de var a let 
     imagen.setAttribute('src', productosFiltrados[i].img);
 
     divFiltrados.appendChild(titutloFiltrados)
     divFiltrados.appendChild(imagen)
 
     listaProducto.appendChild(divFiltrados)
   } */

};

