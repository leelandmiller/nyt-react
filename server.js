const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
// const Promise = require('bluebird');
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;
mongoose.Promise = global.Promise;
let app = express();

mongoose.connect('mongodb://localhost:27017/newyorktimesdb');

let db = mongoose.connection;

// Show any mongoose errors
db.on("error", err => console.log(`Mongoose Error: ${err}`) );
// Once logged in to the db through mongoose, log a success message
db.once("open", () => console.log('Mongoose connection successful') );

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/public'));
app.use('/', routes);

app.listen(PORT, () => console.log(`Now listening on port ${PORT}
    Visit localhost:${PORT} in your browser`));