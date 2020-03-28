const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  html = fs.readFileSync(__dirname + "/index.html", "utf-8");
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === "/contacto") {
    res.end(html);
  } else if (req.url === "/") res.end("Bienvenidosssssss!!!!!");
});

server.listen(3030, "localhost");

//mauro puto  15:17hs 280320
