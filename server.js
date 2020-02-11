require('dotenv').config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV){
    app.use(express.static('client/build'))
}

//database
const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI || 'mongodb://localhost/hereforthebeer';
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//routes
app.use(require('./routes'));

app.listen(PORT, () => console.log("Listening on PORT: ", PORT));