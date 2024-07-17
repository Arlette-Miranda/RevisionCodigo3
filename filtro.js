// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementsById("lista-de-productos") /* Se corrige a solicitar por id en vez de name */
/* const $i =  */document.querySelector('.input'); /* Se quita la variable ya que se dice la referencia */

for (let i = 0; i < productos.length; i++) {
  let d = document.createElement("div") /* Se cambia tipo de variable de var a let */
  d.classList.add("producto")

  let ti = document.createElement("p") /* Se cambia tipo de variable de var a let */
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  let imagen = document.createElement("img"); /* Se cambia tipo de variable de var a let */
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
  shopContent.append(content);
}

displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div") /* Se cambia tipo de variable de var a let */
    d.classList.add("producto")
  
    let ti = document.createElement("p") /* Se cambia tipo de variable de var a let */
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    let imagen = document.createElement("img"); /* Se cambia tipo de variable de var a let */
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  