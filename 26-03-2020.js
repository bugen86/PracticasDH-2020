/* const http = require("http");
const fs = require("fs");
const clear = require("clear");
 */
let hora = 0,
    minutos = 0,
    segundos = 0,
    reloj = document.getElementById("reloj");

/* setTimeout(() => {
    console.log("Hola eze pasaron 5 segundos");
}, 5000); */

setInterval(() => {
    /*     function html() {
        html = fs.readFileSync(__dirname + "/index.html", "utf-8");
        return html;
    } */
    segundos++;
    if (segundos == 60) {
        minutos++;
        segundos = 0;
    }
    if (minutos == 60) {
        hora++;
        minutos = 0;
    }
    reloj.innerHTML = `${hora}:${minutos}:${segundos}`;
    //clear();
}, 1000);

/* let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/contacto") {
        res.end(html());
    } else if (req.url === "/") res.end("Bienvenidosssssss!!!!!");
});

server.listen(3030, "localhost"); */
