const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productInStockCount: {
        type: Number,
        required: true
    },
    productImageUrl: {
        type: String,
        required: true
    }
})

const products = mongoose.model('product', productSchema);

module.exports = products;
