require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to DB'));

//Init Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/upload/postImage'));
// console.log(__dirname + './uploads/postImages');

//Define Routes
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
