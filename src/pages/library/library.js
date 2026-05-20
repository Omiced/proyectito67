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
console.log(mainEl);
console.log(formEl);
console.log(sectionBooksEl);
console.log(navbarEl);

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
  const author = event.target.elements["author"].value;
  const title = event.target.elements["title"].value;
  const pages = event.target.elements["pages"].value;
  const isRead = event.target.elements["is-read"].checked;
  console.log(author);
  console.log(title);
  console.log(pages);
  console.log(isRead);
});
