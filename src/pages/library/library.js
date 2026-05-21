import "./library.css";
/*selecionamos un elemento del dom, usando querySelecto este metodo
  entre parentesis para seleccionar nos pide un selector tipo css
  si queremos seleccionar por clase ponemos
  .className
  Si queremos seleccionar por id ponemos
  #idName
  Si queremos seleccionar por etiqueta ponemos
  nombreEtiqueta
*/
const mainEl = document.querySelector("main");
const formEl = document.querySelector("#booksForm");
const sectionBooksEl = document.getElementById("books");
const navbarEl = document.querySelector(".navbar");
let booksArray = [];

window.addEventListener("load", () => {
  //convirtiendo de texto a estructura lo que nos devuelve getItem
  booksArray = JSON.parse(localStorage.getItem("books"));
  if (booksArray === null) return;
  booksArray.map((book) => renderBook(book));
});

/**
 * Para hacer interactiva la pagina debemos escuchar por eventos
 * un evento es una accion que realiza el usuario sobre nuestra pagina
 * por ejemplo picar un boton, actualizar, escribir algo en un formulario
 *
 * para saber cuando ocurre un evento ocupamos un eventListener o un escucha de eventos
 * una vez que ocurre el evento nosotros podemos desencadenar un efecto
 * ejemplo mostrar algo en pantalla, o mandar un aler, cambiar el color
 */
formEl.addEventListener("submit", (event) => {
  //previene el comportamiento por defecto de las etiquetas
  event.preventDefault();
  //primera forma de obtener los datos de un formulario
  const author = event.target.elements["author"].value;
  const title = event.target.elements["title"].value;
  const pages = event.target.elements["pages"].value;
  const isRead = event.target.elements["is-read"].checked;
  /*segunda forma de obtener los datos, y convertirlos en objeto
    para esta forma es obligatorio que los inputs tengan el 
    atributo name
    pasos
    1. crear un formdata
    2. de este formData hacer un array con los valores y 
    nombres que contiene
    3. convertir ese array a un objeto
    */
  const formData = new FormData(formEl);
  const arrayData = [...formData];
  const bookObject = Object.fromEntries(arrayData);
  //lado izquierdo va el name, lado derecho va el id
  bookObject["isRead"] = event.target.elements["is-read"].checked;
  console.log(bookObject);
  /**
   * como hacer lo anterior en una sola linea
   * const bookOject = Object.fromEntries([...new FormData(formEl)]);
   */
  booksArray.push(bookObject);
  saveBooksLocal(booksArray);
  renderBook(bookObject);
  formEl.reset();
});

const renderBook = (objectBook) => {
  /**
   * Operador ternario
   * condicion a probar ? casoVerdadero : casoFalso
   */
  const cardBook = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${objectBook.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${objectBook.author}</h6>
        <p class="card-text">Numero de paginas ${objectBook.pages}</p>
        <p class="card-text">${objectBook.isRead ? "Este libro ya fue leido" : "No se ha leido este libro"}</p>
      </div>
    </div>
  `;
  sectionBooksEl.insertAdjacentHTML("beforeend", cardBook);
};

const saveBooksLocal = (arrayBooks) => {
  //convertirmos el array a texto
  const textBooks = JSON.stringify(arrayBooks);
  localStorage.setItem("books", textBooks);
};

/**
 * Renderizando cosas
 * Opciones
 * 1. InnerHTML
 *  1.1 nos sirve para ver los elementos internos de una
 *      etiqueta
 *  1.2 borrar el contenido de esta etiqueta
 *  1.3 sobreescribir lo que ya estaba
 *  1.4 agregar nuevos etiquets y
 * combinarlos con los pasados
 *
console.log(sectionBooksEl.innerHTML);
/*borrando todo lo que esta dentro
sectionBooksEl.innerHTML = ""; 
//sobreescribiendo
sectionBooksEl.innerHTML = "<p> sobreescribi</p>";
console.log(sectionBooksEl.innerHTML);
// agregando y conservando lo anterior
sectionBooksEl.innerHTML += "<p> segunda p </p>";


 obteniendo el contenido de texto de una etiqueta
 * Esto solo va regresarnos el texto que tenga una etiqueta
 * y nos sirve para poner nuevo texto, o eliminar el texto
 * textContent

//mostrando el contenido de texto
console.log(sectionBooksEl.textContent);
//cambiando el contenido de texto
sectionBooksEl.textContent = "<p>Hola</p>";
//para no sobreescribir
sectionBooksEl.textContent += "texto 2 sin borrar el anterior";

sectionBooksEl.innerHTML += "<h1>Hola yo fui creado por js</h1>";
sectionBooksEl.innerHTML += `
  <ul>
    <li>Angelica</li>
    <li>Marcos</li>
    <li>Rodolfo</li>
    <li>Esteban</li>
  </ul>

`;

insertAdjacentHTML 
 *1. es un metodo va a tener parentesis y recibe
  parametros
  2. recibe 2 parametros, el primero es la posicion
   el segun es el html 
  las posiciones
  beforebegin , afterbegin
  afterend, beforend
  sectionBooksEl.insertAdjacentHTML("beforeend", cardBook);
 */
