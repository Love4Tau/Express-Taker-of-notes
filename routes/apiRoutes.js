const router = require("express").Router();

const fs = require("fs");

const {v4: uuidv4 } = require("uuid");

// const dbPath = "../db/db.json";

// get request for notes
router.get("/api/notes", (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).send("Error")
        } else {
            const dbData = JSON.parse(data);
            res.json(dbData);
        }
    })
})


router.post("/api/notes", (req, res) => {
    const dbData = JSON.parse(fs.readFileSync("db/db.json", "utf8"));

    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    }
    dbData.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(dbData));
    res.json(dbData);
})

module.exports = router;