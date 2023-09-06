const asyncHandler = require("express-async-handler");

const Supplier = require("../models/supplierModel");
const Purchase = require("../models/purchaseModel");
const Product = require("../models/productModel");

// const { sequelize } = require("sequelize");
const sequelize = require("../config/database");

// desc: Create new supplier
// route: POST /api/v1/suppliers
// access: Private
exports.addSupplier = asyncHandler(async (req, res, next) => {
  const { first_name, last_name, national_id, address, phone_1, phone_2 } =
    req.body;
  const newSupplier = await Supplier.create({
    first_name,
    last_name,
    national_id,
    address,
    phone_1,
    phone_2,
    review: "",
  });
  res.status(201).json(newSupplier);
});

// Get all suppliers
exports.getAllSuppliers = asyncHandler(async (req, res, next) => {
  const suppliers = await Supplier.findAll();
  res.status(200).json(suppliers);
});

// Get supplier by ID
exports.getSupplierById = asyncHandler(async (req, res, next) => {
  const { supplierId } = req.params;
  const supplier = await Supplier.findByPk(supplierId);
  if (!supplier) {
    res.status(404).json({ message: "Supplier not found" });
  } else {
    res.status(200).json(supplier);
  }
});

// Update supplier
exports.updateSupplier = asyncHandler(async (req, res, next) => {
  const { supplierId } = req.params;
  const supplier = await Supplier.findByPk(supplierId);
  if (!supplier) {
    res.status(404).json({ message: "Supplier not found" });
  } else {
    await supplier.update(req.body);
    res.status(200).json(supplier);
  }
});

// Delete supplier
exports.deleteSupplier = asyncHandler(async (req, res, next) => {
  const { supplierId } = req.params;
  const supplier = await Supplier.findByPk(supplierId);
  if (!supplier) {
    res.status(404).json({ message: "Supplier not found" });
  } else {
    await supplier.destroy();
    res.status(200).json({ message: "Supplier deleted" });
  }
});

// Get all suppliers accounts
exports.suppliersAccounts = asyncHandler(async (req, res, next) => {
  try {
    const results = await sequelize.query(`
      SELECT 
          S.id AS supplier_id,
          S.first_name AS supplier_first_name,
          S.last_name AS supplier_last_name,
          SUM((PCH.quantity - PCH.no_good_returns) * PCH.purchasing_price) AS sum_deserved_money,
          SUM(PCH.paid_cash) AS sum_paid_cash,
          SUM((PCH.quantity - PCH.no_good_returns) * PCH.purchasing_price) - SUM(PCH.paid_cash) AS difference
      FROM suppliers S 
      JOIN purchases PCH ON S.id = PCH.supplier_id
      JOIN products PR ON PCH.product_id = PR.id
      GROUP BY S.id, S.first_name
      ORDER BY S.id;
    `);

    res.json(results);
  } catch (error) {
    throw error;
  }
});

exports.supplierReport = asyncHandler(async (req, res, next) => {
  const supplierId = req.params.supplierId; // Assuming the parameter is named supplierId

  const result = await Purchase.findAll({
    attributes: [
      "id",
      [sequelize.col("Supplier.first_name"), "first_name"],
      [sequelize.col("Supplier.last_name"), "last_name"],
      [sequelize.col("Supplier.card_id"), "card_id"],
      [sequelize.col("Supplier.address"), "address"],
      [sequelize.col("Supplier.phone_no_1"), "phone_no_1"],
      [sequelize.col("Supplier.phone_no_2"), "phone_no_2"],
      [sequelize.col("Product.product_name"), "product_name"],
      [sequelize.col("Purchase.purchasing_price"), "unit_product_price"],
      "quantity",
      "no_good_returns",
      [
        sequelize.literal(
          "(Purchase.quantity - Purchase.no_good_returns) * Purchase.purchasing_price"
        ),
        "deserved_money",
      ],
      "discount",
      "paid_cash",
      [
        sequelize.literal(
          "((Purchase.quantity - Purchase.no_good_returns) * Purchase.purchasing_price) - Purchase.paid_cash - Purchase.discount"
        ),
        "remaining_money",
      ],
      "purchase_date",
    ],
    include: [
      {
        model: Supplier,
        attributes: [],
        as: "Supplier", // Make sure this matches the alias used in the Supplier model
      },
      {
        model: Product,
        attributes: [],
        as: "Product", // Make sure this matches the alias used in the Product model
      },
    ],
    where: {
      "$Supplier.id$": supplierId, // Match the Supplier's id to the given supplierId
    },
    raw: true, // Fetch raw data
  });

  res.json(result);
});
