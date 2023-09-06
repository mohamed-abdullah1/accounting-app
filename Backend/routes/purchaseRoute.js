const {
  createPurchase,
//   getPurchase,
//   getPurchaseById,
//   updatePurchase,
//   deletePurchase,
} = require("../controllers/purchaseController");

const router = require("express").Router();

router.route("/").post(createPurchase);
// router.route("/").get(getPurchase);
// router.route("/:id").get(getPurchaseById);
// router.route("/:id").put(updatePurchase);
// router.route("/:id").delete(deletePurchase);

module.exports = router;

