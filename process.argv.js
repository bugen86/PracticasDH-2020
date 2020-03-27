const funciones = require("./ProfeFuriosa");
const fs = require("fs");

let [, , cantidadMinima, ...ingresos] = process.argv;

console.log(funciones.seAbre(cantidadMinima, ...ingresos));
