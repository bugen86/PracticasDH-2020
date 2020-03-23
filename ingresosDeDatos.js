const funciones = require("./ProfeFuriosa");
const fs = require("fs");

let [, , cantidadMinima, ...ingresos] = process.argv;

console.log(funciones.seAbre(cantidadMinima, ...ingresos));

//let jsonVar = {
 //   clave: "valor",
 //   clave2: "valor2"
//};

let Datos = {
    valor:cantidadMinima,
    horarios: ingresos
}
let datosJson = JSON.stringify(Datos);

fs.writeFileSync("registro.json",datosJson);

