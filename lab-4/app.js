const express = require('express');
const bodyParser =require('body-parser');
const productRoutes = require('./route/product');
const userRoutes  = require('./route/user');
const path =require('path');

// const Joi = require('joi');
// const fs = require('fs');

const app=express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/mycss', express.static(path.join(__dirname,'public', 'css')));
app.use('/img', express.static(path.join(__dirname,'public', 'images')));
app.use('/js', express.static(path.join(__dirname,'public','js')));


app.use(productRoutes);
app.use('/user',userRoutes);
app.use('/', (req,res,next) => {
    console.log('This always run');
    next();
});



app.listen(3000, ()=>console.log('You are serving from 3000...'))