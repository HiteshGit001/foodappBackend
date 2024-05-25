import mongoose from "mongoose";

const Schema = mongoose.Schema;

const products = new Schema({
    restorent: {
        require: true,
        type: String,
    },
    seller_id: {
        require: true,
        type: String,
    },
    category_id: {
        require: true,
        type: String,
    },
    product_img: {
        require: true,
        type: String,
    },
    product_name: {
        require: true,
        type: String,
    },
    product_dis: {
        require: true,
        type: String,
    },
    rating: {
        require: true,
        type: String,
    },
    price: {
        require: true,
        type: String,
    },
    stocks: {
        require: true,
        type: String,
    },
    variation: [{}],
})

const Products = mongoose.model('products', products);
export default Products;