const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
    },
    image: {
        data: Buffer,
        contentType: String,
    }
})

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;