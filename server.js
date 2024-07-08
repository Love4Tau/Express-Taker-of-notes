// import express and routes

const express = require("express");
const homeroutes = require("./routes/homeRoutes");

const app = express();

const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.use(homeroutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})