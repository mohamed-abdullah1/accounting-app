const asyncHandler = require("express-async-handler");
const { Op, fn, col, literal, Sequelize } = require("sequelize");
const sequelize = require("../config/database");
const AppError = require("../utils/appError");

const Stock = require("../models/stockModel"); // Adjust the path to the Stock model
const StockProduct = require("../models/stockProductModel"); // Adjust the path as needed
const Product = require("../models/productModel"); // Adjust the path as needed
const Category = require("../models/categoryModel"); // Adjust the path as needed
const Sale = require("../models/salesModel"); // Adjust the path as needed
// const { App } = require("antd");

// desc   : Get all stocks
// route  : GET /api/stock
// access : Private
exports.getAllStocks = asyncHandler(async (req, res, next) => {
  const stocks = await Stock.findAll({
    order: [["stock_id", "ASC"]],
  });
  res.status(200).json(stocks);
});

// desc   :add stock
// route  : POST /api/stock
// access : Private
exports.addStock = asyncHandler(async (req, res, next) => {
  const { stock_name, address } = req.body;
  const newStock = await Stock.create({
    stock_name: stock_name,
    address: address,
  });
  console.log(`Stock added with ID: ${newStock.id}`);
  res
    .status(201)
    .json({ message: "Stock added successfully", stock: newStock });
});

// desc   : Update stock by id
// route  : Patch /api/stock/:stock_id
// access : Private
exports.updateStock = asyncHandler(async (req, res, next) => {
  const { stock_id } = req.params;
  const { stock_name, address } = req.body;

  const stock = await Stock.findByPk(stock_id);

  if (!stock) {
    return next(new AppError("Stock not found", 404));
  }

  await stock.update({
    stock_name: stock_name,
    address: address,
  });

  res
    .status(200)
    .json({ message: "Stock updated successfully", updated_stock: stock });
});

// desc   : Delete stock by id
// route  : DELETE /api/stock/:stock_id
// access : Private
exports.deleteStock = asyncHandler(async (req, res, next) => {
  const { stock_id } = req.params;

  const stock = await Stock.findByPk(stock_id);

  if (!stock) {
    return next(new AppError("Stock not found", 404));
  } else {
    await stock.destroy();
    res.status(204).json({ message: "Stock deleted successfully" });
  }
});

// desc   : Get all products in a stock
// route  : GET /api/stock/:stock_id/products
// access : Private
exports.getStockProducts = asyncHandler(async (req, res, next) => {
  try {
    const { stock_id } = req.params;

    const stockProducts = await StockProduct.findAll({
      where: { stock_id },
      include: [
        {
          model: Product,
          include: [{ model: Category }],
        },
        {
          model: Sale,
          attributes: [
            [
              sequelize.fn("SUM", sequelize.col("no_good_returns")),
              "total_good_returns",
            ],
            [
              sequelize.fn("SUM", sequelize.col("no_bad_returns")),
              "total_bad_returns",
            ],
          ],
        },
      ],
      attributes: [
        [
          sequelize.fn("SUM", sequelize.col("StockProduct.quantity")),
          "current_quantity_in_stock",
        ],
      ],
      group: [
        "Product.id",
        "Product->Category.id",
        "StockProduct.product_id",
        "Sale.product_id",
      ],
    });

    const transformedStockProducts = stockProducts.map((product) => ({
      product_id: product.Product.id,
      product_name: product.Product.product_name,
      selling_price: product.Product.selling_price,
      sold_quantity: product.Sale.total_good_returns,
      purchased_quantity: product.Purchased_quantity,
      current_quantity_in_stock: product.current_quantity_in_stock,
      total_good_returns: product.Sale.total_good_returns,
      total_bad_returns: product.Sale.total_bad_returns,
      product_status: getProductStatus(product.current_quantity_in_stock),
    }));

    res.json(transformedStockProducts);
  } catch (err) {
    console.error("Error fetching stock products:", err.message);
    res.status(500).json({ error: "An error occurred" });
  }
});

// desc   : Add product to stock
// route  : POST /api/stock/:stock_id/products
// access : Private
exports.addProductToStock = asyncHandler(async (req, res, next) => {
  const { stock_id } = req.params;
  const { product_id, quantity } = req.body;

  const stock = await Stock.findByPk(stock_id);

  if (!stock) {
    return next(new AppError("Stock not found", 404));
  }

  const product = await Product.findByPk(product_id);

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  const stockProduct = await StockProduct.findOne({
    where: { stock_id, product_id },
  });

  if (stockProduct) {
    return next(
      new AppError("Product already exists in stock. Use PATCH to update", 400)
    );
  }

  const newStockProduct = await StockProduct.create({
    stock_id,
    product_id,
    quantity,
  });

  res.status(201).json({
    message: "Product added to stock successfully",
    stockProduct: newStockProduct,
  });
});

// *********************************************************************************************************************************************************

// exports.getStockProducts = asyncHandler(async (req, res, next) => {
//   const stock_id = req.params.stock_id; // Assuming you're using a route parameter for stock_id

//   const products = await Product.findAll({
//     attributes: [
//       "id",
//       "product_name",
//       "selling_price",
//       [
//         sequelize.fn("SUM", sequelize.col("StockProduct.sold_quantity")),
//         "sold_quantity",
//       ],
//       [
//         sequelize.fn("SUM", sequelize.col("StockProduct.purchased_quantity")),
//         "purchased_quantity",
//       ],
//       [
//         sequelize.fn("SUM", sequelize.col("Sale.no_good_returns")),
//         "total_good_returns",
//       ],
//       [
//         sequelize.fn("SUM", sequelize.col("Sale.no_bad_returns")),
//         "total_bad_returns",
//       ],
//       [
//         sequelize.literal(`CASE
//           WHEN COALESCE(SUM("StockProduct"."quantity"), 0) > 10 THEN 'Good'
//           WHEN COALESCE(SUM("StockProduct"."quantity"), 0) > 0 AND COALESCE(SUM("StockProduct"."quantity"), 0) < 10 THEN 'Almost sold'
//           WHEN COALESCE(SUM("StockProduct"."quantity"), 0) > 5 THEN 'Out of stock'
//           ELSE ''
//         END`),
//         "product_status",
//       ],
//     ],
//     include: [
//       {
//         model: Category,
//         attributes: ["category_name"],
//       },
//       {
//         model: StockProduct,
//         attributes: [],
//       },
//       {
//         model: Sale,
//         attributes: [],
//         required: false,
//       },
//     ],
//     where: {},
//     group: ["Product.id", "Category.category_name", "StockProduct.stock_id"],
//     having: {
//       "$StockProduct.stock_id$": stock_id,
//     },
//   });

//   res.status(200).json({ success: true, data: products });
// });

// // *********************************************************************************************************************************************************

// // exports.getStockProducts = asyncHandler(async (req, res, next) => {
// //   try {
// //     const stock_id = req.params.stock_id;

// //     const query = `
// //       SELECT
// //         p.id AS product_id,
// //         p.product_name,
// //         p.selling_price,
// //         SP.sold_quantity,
// //         SP.purchased_quantity,
// //         COALESCE(SP.quantity, 0) AS current_quantity_in_stock,
// //         COALESCE(SUM(S.no_good_returns), 0) AS total_good_returns,
// //         COALESCE(SUM(S.no_bad_returns), 0) AS total_bad_returns,
// //         CASE
// //           WHEN COALESCE(SP.quantity, 0) > 10 THEN 'Good'
// //           WHEN COALESCE(SP.quantity, 0) > 0 AND COALESCE(SP.quantity, 0) < 10 THEN 'Almost sold'
// //           WHEN COALESCE(SP.quantity, 0) > 5 THEN 'Out of stock'
// //         END AS product_status
// //       FROM
// //         Products p
// //       LEFT JOIN StockProducts SP ON p.id = SP.product_id AND SP.stock_id = ?
// //       LEFT JOIN Sales S ON p.id = S.product_id
// //       GROUP BY
// //         p.id, p.product_name, p.selling_price, SP.sold_quantity, SP.purchased_quantity, SP.quantity
// //       ORDER BY
// //         p.id
// //       LIMIT 0, 1000;
// //     `;

// //     const stockProducts = await sequelize.query(query, {
// //       type: sequelize.QueryTypes.SELECT,
// //       replacements: [stock_id],
// //     });

// //     res.json(stockProducts);
// //   } catch (err) {
// //     console.error("Error fetching stock products:", err.message);
// //     res.status(500).json({ error: "An error occurred" });
// //   }
// // });
