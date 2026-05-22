/**
 * funciones asincronas
 * son funciones donde vamos a poder hacer peticiones a un servidor
 * o manejar operaciones asincronas
 *
 */
const URL_BASE = "https://fakestoreapi.com/products";

/** pasos para una peticions
 * 1. hacer la peticion usando fetch,
 * si estamos usando funciones asincronas, hay que poner
 * await
 * 2. Procesar la respuesta para obtener los datos,
 * para eso usamos donde guardamos la respuesta.json()
 * si estamos usando funciones asincronas hay que usar await
 *
 * el metodo por defecto de fetch es GET
 */
export async function getAllProducts() {
  try {
    const response = await fetch(URL_BASE);
    const data = await response.json();
    // console.log(response);
    // console.log(data);
    /**
     * !importante Una funcion asincrona
     * ! siempre retorna una promesa
     */
    return data;
  } catch (error) {
    console.log(error);
  }
}

// console.log(getAllProducts());

//obtener un solo product, function expression
export const getSingleProduct = async function (id) {
  const response = await fetch(`${URL_BASE}/${id}`);
  const data = await response.json();
  // console.log(data);
  return data;
};

// getSingleProduct(5);
// getSingleProduct(6);
// getSingleProduct(7);

//agregar un producto

export const addProduct = async (product) => {
  /**
   * despues de la url del fetch si necesitamos cambiar el metodo
   * o enviar informacion adicional al servidor
   * podemos poner un objeto de opciones.
   */
  const response = await fetch(URL_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  // console.log(data);
  return data;
};

const product = {
  title: "salsa verde",
  price: 9.1,
  description: "salsa verde de tomatillo",
  category: "salsa",
  image: "url.com",
};

// addProduct(product);
// addProduct(product);

export const updateProduct = async (id, updateInfo) => {
  const response = await fetch(`${URL_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(updateInfo),
  });
  const data = await response.json();
  // console.log(data);
  return data;
};

// updateProduct(5, { title: "nuevo title" });

export const deleteProduct = async (id) => {
  const response = await fetch(`${URL_BASE}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  // console.log(data);
  return data;
};

// deleteProduct(10);
