const funciones = require("./ProfeFuriosa");
const fs = require("fs");

let [, , cantidadMinima, ...ingresos] = process.argv;

console.log(funciones.seAbre(cantidadMinima, ...ingresos));

//let jsonVar = {
 //   clave: "valor",
 //   clave2: "valor2"
//};

let Datos = {              //creo Objeto Literal
    valor:cantidadMinima,
    horarios: ingresos
}
let datosJson = JSON.stringify(Datos); //paso a Json

fs.writeFileSync("registro.json",datosJson);//para grabar datos en el archivo

