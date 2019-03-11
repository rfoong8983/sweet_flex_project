// this is the main backend file

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').mongoURI;

const bodyParser = require('body-parser')
const passport = require('passport')
const users = require('./routes/api/users')

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
const port = process.env.PORT || 5000; // run on 5000

app.use(passport.initialize());
require('./config/passport')(passport);


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());   
app.use("/api/users", users);




app.listen(port, () => console.log(`Server is running on port ${port}`));
app.get("/", (req, res) => res.send("Hello from pluto!"));
