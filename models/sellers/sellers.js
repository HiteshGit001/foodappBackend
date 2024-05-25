import mongoose from "mongoose";


const Schema = mongoose.Schema;

const sellers = new Schema({
    name: {
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
    seller_img: {
        require: true,
        type: String,
    },
    seller_dis: {
        require: true,
        type: String,
    },
    rating: {
        require: true,
        type: String,
    },
    is_available: {
        require: true,
        type: Boolean,
    }
})

const Sellers = mongoose.model('sellers', sellers);
export default Sellers;