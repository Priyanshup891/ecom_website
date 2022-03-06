const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const fasho = require('./models/fasho');

const app = express();




mongoose.connect('mongodb://priyanshup891:12345@fasho-shard-00-00.hy4xh.mongodb.net:27017,fasho-shard-00-01.hy4xh.mongodb.net:27017,fasho-shard-00-02.hy4xh.mongodb.net:27017/FASHO?ssl=true&replicaSet=atlas-11ebgu-shard-0&authSource=admin&retryWrites=true&w=majority');
const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open",() => {
    console.log("Database Connected");
})




app.use(express.static('public'));


app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req,res) => {
    res.send("Ecommerce Website !")
})
app.get('/home', async (req,res) => {
    const fash = await fasho.find({}).limit(8);
    res.render('home', {fash});
})

app.get('/mens', async (req,res) => {
    const fash = await fasho.find({gender:"Men"}).limit(12);
    const section = "MENS";
    res.render('products', {fash, section})
})

app.get('/womens', async (req,res) => {
    const fash = await fasho.find({gender:"Women"}).limit(12);
    const section = "WOMENS";
    res.render('products', {fash, section})
})

app.get('/unisex', async (req,res) => {
    const fash = await fasho.find({gender:"Unisex"}).limit(12);
    const section = "UNISEX";
    res.render('products', {fash, section})
})

app.get('/productDetails/:id', async (req,res) => {
    const fash = await fasho.findOne({'id' : req.params.id });
    res.render('ProductDetails', {fash})
    
})




app.listen(3000, () => {
    console.log("Serving on port 3000");
})