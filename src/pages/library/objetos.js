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
console.log(participante);

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
//como asignar nuevas llaves
participante.phoneNumber = 5570212729;
console.log(participante);
//que pasa si intento poner la misma llave
participante.lastName = "Rosas";
console.log(participante);
// cambiando el valor de un array anidado o asociativo
participante.favoritaAnimals[0] = "Perro";
console.log(participante.favoritaAnimals);
//borrando una llave
delete participante.phoneNumber;
console.log(participante);
console.log(participante.phoneNumber);
/**
 * Usamos destructuring para obtener valores de un objeto
 * y asignarlos directamente a una variable nueva
 * Puntos importantes
 *  1.  en objetos no importa el orden en el que pongamos
 * las variables
 * 2. las variables se deben llamar exactamente igual que las
 * las llaves del objeto
 * 3. la sintaxis es
 */
const { favoritaAnimals, name, address } = participante;
// el destructuring es una abreviacion de esta sintaxis de abajo
const favoritaAnimals2 = participante.favoritaAnimals;
const name2 = participante.name;
const address2 = participante.address;
console.log(favoritaAnimals);
console.log(name);
console.log(address);
/**
 * Destructuring de objetos anidados
 * Pasos
 * 1. crear la sintaxis de destructuring
 * 2. identificar la llave que tiene el objeto anidado
 * 3. poner del lado izquierdo el nombre de esta llave seguido de
 * dos puntos : , y luego entre llaves poner la key del objeto ani
 * dado que queremos tener en una variable.
 * Importante
 * la parte donde ponemos la key que tiene el objeto no se va a
 * crear como una variable, solamente es un puente para acceder
 * a las llaves y valores del objeto anidado.
 */
const {
  location,
  lastName,
  address: { zipCode },
} = participante;
console.log(location);
console.log(lastName);
console.log(zipCode);
