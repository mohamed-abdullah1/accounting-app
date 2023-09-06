const express = require("express");
const {
  getAllProducts,
  //   addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/:product_id").patch(updateProduct).delete(deleteProduct);

module.exports = router;
