const express = require("express");

const {
  getAllSuppliers,
  addSupplier,
  getSupplierById,
  updateSupplier,
  deleteSupplier,
  suppliersAccounts,
  supplierReport,
} = require("../controllers/supplierController");

const router = express.Router();

router.route("/").get(getAllSuppliers).post(addSupplier);

// router
//   .route("/:supplierId")
//   .get(getSupplierById)
//   .patch(updateSupplier)
//   .delete(deleteSupplier);

router.route("/accounts").get(suppliersAccounts);

router.route("/accounts/:supplierId").get(supplierReport);

module.exports = router;
