//!-----------------------------YARGS OPTIONS------------------------------------------
const argv = require("yargs")
  .option("t", {
    alias: "tabla",
    type: "number",
    demandOption: true,
    describe: "Es la tabla de multiplicar.",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola.",
  })
  .option("li", {
    alias: "limite",
    type: "number",
    
    describe: "Número limite para multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.tabla)) {
      throw "La tabla debe ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
