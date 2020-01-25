const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');

const db = require('./util/database');

const errorController = require('./controllers/error');


const app = express();


const userData = require("./routes/userRoutes");
const authRoutes = require("./routes/auth");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "public")));


//session setup
app.use(session({ secret: 'my secret', resave: false, saveUninitialized: false }));


app.use(userData.routes);
app.use(authRoutes);

//"catch-all" route
app.use("/", errorController.get404);

app.listen(3000, () => {
    console.log("server is up on port 3000");
});


