import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messages = new Schema({
  messages:[{}]
})

const Message = mongoose.model('messages', messages);
export default Message;