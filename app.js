const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");
require("colors");

console.clear();
// const tabla = 5 ;

//!---------------------------SIN YARGS------------------------------------------
//* La siguiente manera no es optima...
//! Destructuramos para obtener el tercer argumento que nos manda la consola:
// const [, , arg3 = "tabla=5"] = process.argv;
//! Destructuramos para obtener solo el numero, con split separamos:
// const [, tabla = 5] = arg3.split("=");
// imprimimos el numero:
// console.log(tabla);
//!-------------------------------------------------------------------------------

//!-----------------------------YARGS------------------------------------------

// console.log(process.argv);
// console.log(argv);
// console.log(`Base de Yars: ${argv.tabla}`);

//!--------------------------------------------------------------------------------

crearArchivo(argv.tabla, argv.listar, argv.limite)
  .then((nombreArchivo) => console.log(nombreArchivo.magenta, "creado"))
  .catch((err) => console.log(err));

//? si la carpeta donde se guarda el archivo no tiene permisos mostrará en consola y podemos manejar el error:
//? si es un error code: EACCES podemos decirle al usuario que otorgue permisos.
