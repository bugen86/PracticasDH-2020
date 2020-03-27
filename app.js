const fs = require("fs");

fs.readdir(__dirname + "/archivos", (err, data) => {
    console.log("Archivos leidos correctamente");
});

console.log("Leyendo Archivos del directorio mencionado");
