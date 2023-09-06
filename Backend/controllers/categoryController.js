const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");

exports.getAllProductsForCategory = asyncHandler(async (req, res, next) => {
  const { category_id } = req.params;

  const category = await Category.findByPk(category_id);
  if (!category) {
    return next(new AppError("Category not found", 404));
  }

  const products = await Product.findAll({
    where: { category_id },
    include: {
      model: Category,
      attributes: ["category_name"],
    },
    attributes: ["product_id", "product_name", "selling_price"],
  });

  res.status(200).json(products);
});

// @desc    Get porducts for a category
// @route   GET /api/v1/category/:category_id/product
// @access  Public
exports.addProductForCategory = asyncHandler(async (req, res, next) => {
  try {
    const { category_id } = req.params;
    const { product_name, selling_price, description } = req.body;

    const newProduct = await Product.create({
      product_name,
      selling_price,
      category_id,
      description,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
});

// @desc    delete a product from a category
// @route   DELETE /api/v1/category/:category_id/product/:product_id
// @access  Public
exports.deleteProductFormCategory = asyncHandler(async (req, res, next) => {
  try {
    const { category_id, product_id } = req.params;

    const category = await Category.findByPk(category_id);
    if (!category) {
      return next(new AppError("Category not found", 404));
    }

    const product = await Product.findByPk(product_id);
    if (!product) {
      return next(new AppError("Product not found", 404));
    }

    await product.destroy();

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
});

// @desc    Create a new category
// @route   POST /api/v1/category
// @access  Public
exports.addCategory = asyncHandler(async (req, res, next) => {
  const { category_name } = req.body;
  const newCategory = await Category.create({ category_name });
  res.status(201).json(newCategory);
});

// @desc    Get all categories
// @route   GET /api/v1/category
// @access  Public
exports.getAllCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.findAll();
  res.status(200).json(categories);
});

// @desc    Update a category
// @route   PUT /api/v1/category/:category_id
// @access  Public
exports.updateCategory = asyncHandler(async (req, res, next) => {
  const { category_id } = req.params;
  const { category_name } = req.body;

  const category = await Category.findByPk(category_id);
  if (!category) {
    return next(new AppError("Category not found", 404));
  }

  await category.update({ category_name });

  res.status(200).json({ message: "Category updated successfully" });
});

// @desc    Delete a category
// @route   DELETE /api/v1/category/:category_id
// @access  Public
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const { category_id } = req.params;

  const category = await Category.findByPk(category_id);
  if (!category) {
    return next(new AppError("Category not found", 404));
  }

  await category.destroy();

  res.status(204).send();
});
