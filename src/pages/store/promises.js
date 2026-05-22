/**
 * Pasos para hacer una promesa
 * 1.  crear funcion, el nombre de la funcion va a ser el nombre de la promesa
 * 2.  esta funcion va a retornar la promesa
 * 3. dentro de la promesa ponemos que va a pasar en los dos casos
 * reject y resolve
 */
console.log("primero");
function waitNSeconds(seconds) {
  console.log("segundo");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = true;
      if (response) {
        resolve(
          `La promesa se resolvio con exito han pasado ${seconds} 
          segundos`,
        );
      } else {
        reject(
          `La peticion no fue resulta con exito, han pasado ${seconds}, 
          Status Code: 404`,
        );
      }
    }, seconds * 1000);
  });
}

waitNSeconds(6)
  .then((response) => {
    console.log("Respuesta exitosa ", response);
  })
  .catch((error) => {
    console.log("Peticion rechazada ", error);
  });

console.log("tercero");
console.log("cuarto");
