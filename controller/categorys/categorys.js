import Category from "../../models/category/Categorys.js";

export const addCategory = async (req, res) => {
    const data = new Category(req.body);
    try {
        await data.save();
        res.status(201).json(data);
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}

export const updateCategory = async (req, res) => {
    try {
        console.log(req.body);
        const { id, category } = req.body;
        const updatedMessage = await Category.findByIdAndUpdate(
            id,
            { $set: { category } },
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

export const readAllCategory = async (req, res) => {
    try {
        const response = await Category.find();
        return res.status(200).send(response);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}