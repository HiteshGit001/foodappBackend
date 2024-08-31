import User from "../../models/user/user.js";

export const addUser = async (req, res) => {
  const data = new User(req.body);
  console.log(req.body)
  try {
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(409).json({ error: err.message })
  }
}

export const getUser = async (req, res) => {
  try {
    console.log(req.body, "fjskdiafojsiod")
    const data = await User.find(req.query);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}