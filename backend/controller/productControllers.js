const product = require('../models/productsSchema');

const getAllProducts = async (req, res) => {
    try {
        const products = await product.find({});

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}


const getProductByID = async (req, res) => {
    try {
        const productByID = await product.findById(req.params.id);

        res.json(productByID);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getAllProducts,
    getProductByID
};