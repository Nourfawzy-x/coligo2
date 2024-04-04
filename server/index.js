const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/" && req.method == "GET") {
    res.end("home page");
  } else if (req.url == "/about" && req.method == "GET") {
    res.end("about page");
  } else {
    res.end("404 not found");
  }
});
server.listen(3000, () => {
  console.log("server is running...");
});
