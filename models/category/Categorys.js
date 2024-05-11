import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorys = new Schema({
  category_name:{
    require:true,
    type:String,
  },
  category_img:{
    require:true,
    type:String,
  }
})

const Category = mongoose.model('categorys', categorys);
export default Category;