const http = require("http");
const app = require("./src/app");

const port = process.env.PORT || 3001;

http.createServer(app).listen(port, () => {
    console.log("listening on port 3001");
});
