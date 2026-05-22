import "../../style.css";
import "./store.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { getAllProducts, getSingleProduct } from "../../service/api";

// seleccionar el elemento main del store.html
const mainEl = document.querySelector("main");

async function renderProduct(productPromise) {
  const data = await productPromise;
  console.log(data);
  console.log(data.rating.rate);
  const productCard = `
  <div class="card" style="width: 18rem;">
    <img src="${data.image}" class="card-img-top" alt="${data.title}">
    <div class="card-body">
      <h5 class="card-title">${data.title}</h5>
      <p class="card-text">${data.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Price $${data.price}</li>
      <li class="list-group-item">Rate ${data.rating.rate}</li>
      <li class="list-group-item">Category ${data.category}</li>
    </ul>
  </div>
  `;
  mainEl.insertAdjacentHTML("beforeend", productCard);
}

/**
 * !Importante
 * Si quieren usar la palabra await afuera de una funcion asincrona
 * Su archivo js tiene que estar linkeado como module
 */
const productsArray = await getAllProducts();
productsArray.map((producto) => renderProduct(producto));
console.log(productsArray);
