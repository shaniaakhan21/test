const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

// Set the views directory
app.set('views', './views');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true });

// Use body-parser to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use the routes defined in the index.js file
app.use('/', require('./routes/index'));


// Start the server
app.listen(3000, () => {
    console.log('Server started on http://127.0.0.1:3000');
});
