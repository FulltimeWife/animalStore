const express = require("express");
const router = express.Router();

const { getAllProducts, getProductByID } = require("../controller/productControllers")

//@desc     GET all products from the DB.
//@route    GET /api/products
//@access   Public.

router.get("/", getAllProducts)

//@desc     GET a product by ID from the DB.
//@route    GET /api/products/:id
//@access   Public.

router.get("/:id", getProductByID);

module.exports = router;