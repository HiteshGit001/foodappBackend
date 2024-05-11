import Message from "../../models/messages/Messages.js"

export const createRequest = async (req, res) => {
  const data = new Message(req.body);
  console.log(req.body)
  try {
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(409).json({ error: err.message })
  }
}

export const updateMessage = async (req, res) => {
  try {
    console.log(req.body);
    const { id, messages } = req.body;
    const updatedMessage = await Message.findByIdAndUpdate(
      id, 
      { $set: { messages } }, 
      { new: true }
    );
    if (updatedMessage) {
      res.status(200).json(updatedMessage);
    } else {
      res.status(404).json({ message: "No document found with that ID" });
    }
  } catch (err) {
    console.error("Error updating message:", err);
    res.status(500).json({ error: err.message });
  }
}

export const readAllMessages = async (req,res)=>{
  try {
   const data = await Message.find()
    res.status(201).json(data);
  } catch (err) {
    res.status(409).json({ error: err.message })
  }
}