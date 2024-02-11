const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/TodoRoute')

require('dotenv').config();

const app = express()
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
.connect('mongodb+srv://root:1234@cluster0.bvwk0lr.mongodb.net/ToDoApp?retryWrites=true&w=majority')
.then(()=>console.log('Connected to MongoDB'))
.catch((err)=>console.log(err));

app.use(routes);

app.listen(PORT, ()=>console.log(`Listening on ${PORT}`));
