import Sellers from "../../models/sellers/sellers.js";


export const addSeller = async (req, res) => {
    const data = new Sellers(req.body);
    console.log(req.body)
    try {
        await data.save();
        res.status(201).json(data);
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}

export const updateSeller = async (req, res) => {
    const data = new Sellers.findByIdAndUpdate(req.body.id, req.body);
    try {
        await data.save();
        res.status(201).json(data);
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}

export const getSellersList = async (req, res) => {
    const { category_id, seller_id } = req.body;
    const data = await Sellers.find(req.body);
    try {
        res.status(200).json(data)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}