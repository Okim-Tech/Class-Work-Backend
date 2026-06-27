const Product = require("../models/productModel.js");
const User = require("../models/user.model.js");
exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, rating, image, quantity, createdBy } =
      req.body;
    const existingProduct = await Product.findOne({ title });
    if (existingProduct) {
      return res.status(400).json({
        success: false,
        message: "Title already Exist",
      });
    }

    const product = await Product.create({
      title,
      description,
      price,
      rating,
      image,
      quantity,
      createdBy,
    });
    res.status(200).json({
      success: true,
      message: "Product Created Successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//get all products

exports.getAllProduct = async (req, res) => {
  try {
    const product = await Product.find()
      .populate("createdBy", "username email country gender")
      .sort({ createdAt: -1 });
    res.status(201).json({
      success: true,
      message: "Products retrieved Successful",
      count: product.length,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
