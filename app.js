const express = require("express")
const app = express()

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public/'));
app.use(express.json());

const fs = require('fs');
let files = fs.readdirSync("./public/nfs/nfs/aiart/images/")
console.log(files)

app.listen(3000)


app.get('/', (req, res) => res.render('index'));

app.get("/gallery", (req, res) => res.render("gallery"))

app.get("/images", (req, res) => res.status(200).json({images: files}))
