const express = require("express");

const {
  getAllStocks,
  addStock,
  getStockProducts,
  updateStock,
  deleteStock,
  addProductToStock,
} = require("../controllers/stockController");

const router = express.Router();

router.route("/").get(getAllStocks).post(addStock);
router
  .route("/:stock_id/products")
  .get(getStockProducts)
  .post(addProductToStock);
router.route("/:stock_id").patch(updateStock).delete(deleteStock);

module.exports = router;
