const mongoose = require('mongoose');
const fasho = require('../models/fasho');
const fashion = require('./db')

mongoose.connect('mongodb://priyanshup891:12345@fasho-shard-00-00.hy4xh.mongodb.net:27017,fasho-shard-00-01.hy4xh.mongodb.net:27017,fasho-shard-00-02.hy4xh.mongodb.net:27017/FASHO?ssl=true&replicaSet=atlas-11ebgu-shard-0&authSource=admin&retryWrites=true&w=majority');
const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open",() => {
    console.log("Database Connected");
})



const fashoDb = async() => {
    await fasho.deleteMany({});
    for(let i = 0; i < 36; i++){
        const f = new fasho ({
            id:`${fashion[i].id}`,
            name:`${fashion[i].name}`,
            sku:`${fashion[i].sku}`,
            mpn:`${fashion[i].mpn}`,
            price:`${fashion[i].price}`,
            in_stock:`${fashion[i].in_stock}`,
            currency:`${fashion[i].currency}`,
            brand:`${fashion[i].brand}`,
            description:`${fashion[i].description}`,
            image1:`${fashion[i].image1}`,
            image2:`${fashion[i].image2}`,
            image3:`${fashion[i].image3}`,
            image4:`${fashion[i].image4}`,
            gender:`${fashion[i].gender}`
        });
        await f.save();
    }
}

fashoDb().then(() => {
    mongoose.connection.close();
})