const http = require("http");
const fs = require("fs");

const requestHandler = (req, res) => {
    if (req.url === "/") {
        fs.readFile("views/index.html", "utf8", (err, html) => {
            if (err) throw err;

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    }
};

const server = http.createServer(requestHandler);

server.listen(process.env.PORT || 4100, err => {
    if (err) throw err;
    console.log(`Server running on PORT ${server.address().port}`);
});