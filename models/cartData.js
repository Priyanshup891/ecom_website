const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    id:String,
    name:String,
    image1:String,
    price: Number,
});



module.exports = mongoose.model('CartDetails', CartSchema);