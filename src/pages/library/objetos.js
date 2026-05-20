/**
 * Objeto es una estructura de datos con un par llave valor
 * Es una estructura de datos desordenada
 * Las llaves no se pueden repetir
 * los valores si pueden repetir
 * Para acceder a los valores asociados a las llaves, ocupamos la notacion
 * punto.
 * Pero tambien podemos usar corchetes
 */

//creando un objeto
const participante = {
  name: "Jair",
  lastName: "Sanchez",
  age: 25,
  location: "Mexico",
  favoritaAnimals: ["Tortuga", "Gato", "Cuervo", "Serpiente"],
  address: {
    street: "Calle inventada",
    zipCode: 12731,
  },
};
//notacion punto
console.log(participante.name);
//notacion corchete
console.log(participante["lastName"]);
//trabajando con valor tipo array
console.log(participante.favoritaAnimals[2]);
console.log(participante.favoritaAnimals[3]);
const arrayFavoritaAnimalsJair = participante.favoritaAnimals;
console.log(arrayFavoritaAnimalsJair);
//accediendo a propiedades del objeto anidado
console.log(participante["address"].street);
