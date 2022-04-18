const express = require('express');
const PizzasRouter = require('./routes/PizzasRouter')

const app = express();

app.use('/', PizzasRouter);

app.listen(3000, ()=>{console.log("servidor rodando na porta 3000")});