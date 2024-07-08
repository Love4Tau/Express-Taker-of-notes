// import express and routes

const express = require("express");
const homeroutes = require("./routes/homeRoutes");
const apiRoutes = require("./routes/apiRoutes")

const app = express();

const PORT = process.env.port || 4000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(homeroutes);
app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})