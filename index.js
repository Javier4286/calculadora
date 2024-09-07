const fs = require("fs");
const { stringify } = require("querystring");

const leerArchivo = (file) => {
  try {
    const json = fs.readFileSync(`${file}`, "utf-8");
    const jsObject = JSON.parse(json);
    return jsObject;
  } catch (error) {
    console.log(error.message);
  }
};

const imprimirUnoPorUno = (datos) => {
  if (datos.length !== 0) {
    for (let i = 0; i < datos.length; i++) {
      console.log(`\nDato N°${i}:`);
      console.log(datos[i]);
    }
  } else {
    console.log("\nEmpty File\n");
  }
};

imprimirUnoPorUno(leerArchivo("./data/data.json"));
imprimirUnoPorUno(leerArchivo("./data/empty.json"));

const escribirArchivo = (file, path) => {
  try {
    const string = JSON.stringify(file);
    const writeFile = fs.writeFileSync(`${path}`, string);
    console.log("File creation successful!\n");
    return writeFile;
  } catch (error) {
    console.error(error);
  }
};

const geneSimmons = "Soy Gene Simmons y me revolqué con mas de 5000 timidas";

escribirArchivo(geneSimmons, "./data/ejemplo.txt");
