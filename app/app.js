const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = process.env.MONGO_URI;

const bodyParser = require('body-parser')
const passport = require('passport')
const users = require('./routes/api/users')
const searches = require('./routes/api/search')

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

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
app.use("/api/search", searches);




app.listen(port, () => console.log(`Server is running on port ${port}`));
app.get("/", (req, res) => res.send("Hello from pluto!"));
