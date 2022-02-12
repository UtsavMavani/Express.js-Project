const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = 8000;

const templets_path = path.join(__dirname , "../templets/views");
const partials_path = path.join(__dirname , "../templets/partials");

const staticPath = path.join(__dirname , "../Public");

app.set("view engine" , "hbs")
app.set("views" , templets_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));

app.get("/" , (req , res) => {
    res.render("index");
});

app.get("/weather" , (req , res) => {
    res.render("weather");
});

app.get("/about" , (req , res) => {
    res.render("about");
});

app.get("*" , (req , res) => {
    res.render("error");
});

app.listen(port , () => {
    console.log(`Server Listining to the port no ${port}`);
});