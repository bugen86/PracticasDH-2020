const funciones = require("./ProfeFuriosa");
const fs = require("fs");

let [, , cantidadMinima, ...ingresos] = process.argv;

console.log(funciones.seAbre(cantidadMinima, ...ingresos));

let jsonVar = {
    clave: "valor",
    clave2: "valor2"
};


