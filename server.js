const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;
mongoose.Promise = global.Promise;
let app = express();

const PRODUCTION_KEY = 'mongodb://heroku_885f0zbz:3r00uu2tqa8tet94d69h9qm06f@ds127034.mlab.com:27034/heroku_885f0zbz';
const DEV_KEY = 'mongodb://localhost/newyorktimesdb';

mongoose.connect(PRODUCTION_KEY);

let db = mongoose.connection;

// Show any mongoose errors
db.on("error", err => console.log(`Mongoose Error: ${err}`) );
// Once logged in to the db through mongoose, log a success message
db.once("open", () => console.log('Mongoose connection successful') );

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else {
    app.use(express.static(__dirname + '/client/public'));
}

app.use('/', routes);

app.listen(PORT, () => console.log(`Now listening on port ${PORT}
    Visit localhost:${PORT} in your browser`));
