const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json()); // decode JSON-formatted incoming POST data
app.use(cors());

app.get("/api", async (req, res) => {
    res.json({ message: "Hello from server!" });
});

module.exports = app;