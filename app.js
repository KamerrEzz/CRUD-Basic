const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// CONFIG
app.set("port", process.env.PORT || 3000);

// MIDDLEWARS
// app.use(cors());ç
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/usuarios", require('./routes/usuarios.routes'));

module.exports = app;