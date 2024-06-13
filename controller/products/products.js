import Products from "../../models/products/products.js";

export const addProduct = async (req, res) => {
    const data = new Products(req.body);
    console.log(req.body)
    try {
        await data.save();
        res.status(201).json(data);
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}

export const updateProduct = async (req, res) => {
    const data = new Products.findByIdAndUpdate(req.body.id, req.body);
    try {
        await data.save();
        res.status(201).json(data);
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}

export const getProductList = async (req, res) => {
    const data = await Products.find(req.query);
    try {
        res.status(200).json(data)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}