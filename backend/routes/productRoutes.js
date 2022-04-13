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

/*
//@desc     GET account information from the DB.
//@route    GET /accounts/:id
//@access   Private.

router.get("/accounts/:id", getAccountInformation)

//@desc     GET account information from the DB.
//@route    GET /accounts/signin
//@access   Private.

router.get("/accounts/signin", getAccountInformation)

//@desc     POST new account information to the DB
//@route    POST /account/signup
//@access   Private.
router.put("/accounts/signup, createAccount")
*/
module.exports = router;