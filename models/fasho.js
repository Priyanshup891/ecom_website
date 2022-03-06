const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FashoSchema = new Schema({
    id:String,
    name:String,
    sku:String,
    mpn:Number,
    price:Number,
    in_stock:Boolean,
    currency:String,
    brand:String,
    description:String,
    image1:String,
    image2:String,
    image3:String,
    image4:String,
    gender:String,
});

module.exports = mongoose.model('Fasho', FashoSchema);