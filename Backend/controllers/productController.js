const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

exports.addProductForCategory = asyncHandler(async (req, res) => {
  const { product_name, description, selling_price } = req.body;
  const { category_id } = req.params;
  const newProduct = await Product.create({
    product_name,
    description,
    selling_price,
    category_id,
  });
  res.status(201).json(newProduct);
});

// exports.getAllProducts = asyncHandler(async (req, res, next) => {
//   const products = await Product.findAll({
//     attributes: ["product_id", "product_name", "selling_price"],
//     include: [
//       {
//         model: Category,
//         attributes: ["category_name"],
//       },
//     ],
//   });

//   const flattenedProducts = products.map((product) => ({
//     product_id: product.product_id,
//     product_name: product.product_name,
//     selling_price: product.selling_price,
//     category_name: product.Category.category_name,
//   }));

//   res.status(200).json(flattenedProducts);
// });

// desc: Get all products
// route: GET /api/v1/products
// access: Public
exports.getAllProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.findAll({
    attributes: ["product_id", "product_name", "description", "selling_price"],
    // include: [
    // {
    //   model: Category,
    //   attributes: ["category_name"],
    //   as: "Category",
    // },
    // ],
  });

  const flattenedProducts = products.map((product) => ({
    product_id: product.product_id,
    product_name: product.product_name,
    description: product.description,
    selling_price: product.selling_price,
    // category_name: product.Category.category_name,
  }));

  res.status(200).json(flattenedProducts);
});

exports.updateProduct = asyncHandler(async (req, res, next) => {
  const { product_id } = req.params;

  try {
    // Check if the product exists
    const product = await Product.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update the product's attributes
    await product.update(req.body);

    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
});

// desc: Delete a product
// route: DELETE /api/v1/products/:product_id
// access: Public
// exports.deleteProduct = asyncHandler(async (req, res, next) => {
//   const { product_id } = req.params;

//   // Check if the product exists
//   const product = await Product.findByPk(product_id);
//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   // Delete the product
//   await product.destroy();

//   res.status(200).json({ message: "Product deleted successfully" });
// });

exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const { product_id } = req.params;

  try {
    // Check if the product exists
    const product = await Product.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the product
    await product.destroy();

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    // Handle the error and send an appropriate response
    res.status(500).json({ message: "Internal server error" });
  }
});
