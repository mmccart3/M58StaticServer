const express = require("express");
const app = express();

app.use("/aboutme", express.static("webpages"));

app.listen(5001, () => console.log("Server is up and running and listening on port 5001"))