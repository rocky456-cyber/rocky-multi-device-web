const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

require("events").EventEmitter.defaultMaxListeners = 500;

const app = express();
const code = require("./pair");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/code", code);

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/pair.html"));
});

// Export app for Vercel
module.exports = app;
