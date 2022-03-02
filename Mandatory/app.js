const express = require("express");
const app = express();

app.use(express.static("public"));
//app.use('/css',express.static(__dirname +'/css'));
//app.use(express.static(__dirname + '/public'));

const fs = require("fs");

const navbar = fs.readFileSync("./public/components/navbar.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const aboutExpress = fs.readFileSync("./public/pages/aboutExpress/express.html").toString();
const aboutNode = fs.readFileSync("./public/pages/aboutNode/node.html").toString();
const aboutNpm = fs.readFileSync("./public/pages/aboutNpm/npm.html").toString();
const aboutNodemon = fs.readFileSync("./public/pages/aboutNodemon/nodemon.html").toString();
const aboutHeroku = fs.readFileSync("./public/pages/aboutHeroku/heroku.html").toString();
const aboutSSR = fs.readFileSync("./public/pages/aboutSSR/SSR.html").toString();


const frontpagePage = navbar + frontpage + footer;
const aboutExpressPage = navbar + aboutExpress + footer;
const aboutNodePage = navbar + aboutNode + footer;
const aboutNpmPage = navbar + aboutNpm + footer;
const aboutNodemonPage = navbar + aboutNodemon + footer;
const aboutHerokuPage = navbar + aboutHeroku + footer;
const aboutSSRPage = navbar + aboutSSR + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/aboutExpress", (req, res) => {
    res.send(aboutExpressPage);
});

app.get("/aboutNode", (req, res) => {
    res.send(aboutNodePage);
});

app.get("/aboutNpm", (req, res) => {
    res.send(aboutNpmPage);
});

app.get("/aboutNodemon", (req, res) => {
    res.send(aboutNodemonPage);
});

app.get("/aboutHeroku", (req, res) => {
    res.send(aboutHerokuPage);
});

app.get("/aboutSSR", (req, res) => {
    res.send(aboutSSRPage);
});

app.listen(4000, () =>
 console.log("Server is running on", 4000));