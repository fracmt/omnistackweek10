const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ef8yh.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//to be able to use json in express
app.use(cors());
//app.use(cors({ origin: 'http://localhost:3000' })); you can specify your origin
app.use(express.json());
app.use(routes);


app.listen(3333);