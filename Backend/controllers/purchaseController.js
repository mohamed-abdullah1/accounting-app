const asyncHandler = require("express-async-handler"); // Assuming you're using express-async-handler

const Purchase = require("../models/purchaseModel");
const Stock = require("../models/stockModel");

const AppError = require("../utils/appError");

// exports.createPurchase = asyncHandler(async (req, res) => {
//   // Your purchase creation logic goes here
//   // You can access request data using req.body or req.params

//   // Example: Create a purchase record
//   const newPurchase = await Purchase.create({
//     supplier_id: req.body.supplier_id,
//     product_id: req.body.product_id,
//     stock_id: req.body.stock_id,
//     quantity: req.body.quantity,
//     purchasing_price: req.body.purchasing_price,
//     discount: req.body.discount,
//     paid_cash: req.body.paid_cash,
//     no_good_returns: req.body.no_good_returns,
//     no_bad_returns: req.body.no_bad_returns,
//     purchase_date: req.body.purchase_date,
//   });

//   // Respond with the newly created purchase
//   res.status(201).json({ success: true, data: newPurchase });
// });

// desc   add purchase
// route  POST /api/purchase
// access Private
exports.createPurchase = asyncHandler(async (req, res, next) => {
  const {
    product_id,
    supplier_id,
    stock_id,
    quantity,
    purchasing_price,
    discount,
    paid_cash,
    no_good_returns,
    no_bad_returns,
    purchase_date,
  } = req.body;

  const purchase = await Purchase.create({
    product_id,
    supplier_id,
    stock_id,
    quantity,
    purchasing_price,
    discount,
    paid_cash,
    no_good_returns,
    no_bad_returns,
    purchase_date,
  });

  res.status(201).json({
    message: "Purchase created successfully",
    purchase,
  });
});
