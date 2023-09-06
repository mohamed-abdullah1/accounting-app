const express = require("express");

const {
  addCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  addProductForCategory,
  getAllProductsForCategory,
  deleteProductFormCategory,
} = require("../controllers/categoryController");

const router = express.Router({ mergeParams: true });

router.route("/").post(addCategory).get(getAllCategories);
router.route("/:category_id").patch(updateCategory).delete(deleteCategory);

router
  .route("/:category_id/product")
  .post(addProductForCategory)
  .get(getAllProductsForCategory);

router
  .route("/:category_id/product/:product_id")
  .delete(deleteProductFormCategory);

module.exports = router;
