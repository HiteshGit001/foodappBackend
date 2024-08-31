import mongoose from "mongoose";


const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        require: true,
        type: String,
    },
    phone_number:{
      require:true,
      type:Number,
    },
    useruid: {
        require: true,
        type: String,
    },
    user_location: {
        require: true,
        type: {},
    },
    user_img: {
        require: true,
        type: String,
    },
    rating: {
        require: true,
        type: String,
    },
})

const User = mongoose.model('user', user);
export default User;