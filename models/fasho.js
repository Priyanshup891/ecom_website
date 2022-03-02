const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FashoSchema = new Schema({
    name:String,
    sku:Number,
    mpn:Number,
    price:Number,
    in_stock:Boolean,
    currency:String,
    brand:String,
    description:String,
    images:String,
    gender:String
});

module.exports = mongoose.model('Fasho', FashoSchema);