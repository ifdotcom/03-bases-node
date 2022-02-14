//! Importación de File System:
const fs = require("fs");
require("colors");
const crearArchivo = async (tabla, listar = false, limite=10) => {
  try {
    let data = "";
 
    for (let i = 1; i <= limite; i++) {
      data += `${tabla} x ${i} = ${tabla * i}\n`;
    }

    if (listar) {
      console.log("=============".cyan);
      console.log(`Tabla del: ${tabla}`.red);
      console.log("=============".cyan);

      console.log(data);
    }

    //! si no se especifica PATH toma por defecto donde se encuetra el script.
    // fs.writeFile(`tabla-${tabla}.txt`, data, (err) => {
    //   if (err) throw err;

    //   console.log(`Tabla-${tabla}.txt creado.`);
    // });

    //?----------------------------------------------------------
    fs.writeFileSync(`./salida/tabla-${tabla}.txt`, data);
    return `Tabla-${tabla}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
