const sequelize = require("../config/database"); // Adjust the path as needed
const Category = require("../models/categoryModel");
const Product = require("../models/productModel");
const Stock = require("../models/stockModel");
const StockProduct = require("../models/stockProductModel");
const Client = require("../models/clientModel");
const Supplier = require("../models/supplierModel");
const Purchase = require("../models/purchaseModel");
const Sale = require("../models/salesModel");

const insertDemoData = async () => {
  // Synchronize models before inserting data
  await sequelize.sync();

  try {
    // await Category.bulkCreate([
    //   { category_name: "Kitchen Appliances" },
    //   { category_name: "Electronics" },
    //   { category_name: "Home Decor" },
    // ]);

    // await Product.bulkCreate([
    //   { product_name: "Microwave Oven", category_id: 1, selling_price: 200.0 },
    //   { product_name: "LED TV", category_id: 2, selling_price: 500.0 },
    //   { product_name: "Throw Pillows", category_id: 3, selling_price: 15.0 },
    //   { product_name: "Toaster", category_id: 1, selling_price: 70.0 },
    //   { product_name: "Laptop", category_id: 2, selling_price: 1000.0 },
    // ]);

    // await Stock.bulkCreate([
    //   { stock_name: "Main Warehouse", address: "123 Main St" },
    //   { stock_name: "Secondary Warehouse", address: "456 Elm St" },
    // ]);

    // await StockProduct.bulkCreate([
    //   {
    //     StockStockId: 1,
    //     ProductProductId: 1,
    //     quantity: 10,
    //     sold_quantity: 3,
    //     purchased_quantity: 10,
    //   },
    //   {
    //     StockStockId: 1,
    //     ProductProductId: 2,
    //     quantity: 8,
    //     sold_quantity: 2,
    //     purchased_quantity: 8,
    //   },
    //   {
    //     StockStockId: 1,
    //     ProductProductId: 4,
    //     quantity: 3,
    //     sold_quantity: 1,
    //     purchased_quantity: 3,
    //   },
    //   {
    //     StockStockId: 2,
    //     ProductProductId: 3,
    //     quantity: 15,
    //     sold_quantity: 5,
    //     purchased_quantity: 15,
    //   },
    //   {
    //     StockStockId: 2,
    //     ProductProductId: 5,
    //     quantity: 6,
    //     sold_quantity: 0,
    //     purchased_quantity: 6,
    //   },
    // ]);

    // await Client.bulkCreate([
    //   {
    //     first_name: "John",
    //     last_name: "Doe",
    //     national_id: "12345678901234",
    //     address: "789 Elm St",
    //     phone_1: "12345678901",
    //     phone_2: "23456789012",
    //     review: "Good customer.",
    //   },
    //   {
    //     first_name: "Jane",
    //     last_name: "Smith",
    //     national_id: "56789012345678",
    //     address: "456 Oak St",
    //     phone_1: "23456789012",
    //     phone_2: "34567890123",
    //     review: "Frequent buyer.",
    //   },
    //   {
    //     first_name: "Michael",
    //     last_name: "Johnson",
    //     national_id: "90876543210900",
    //     address: "321 Maple Ave",
    //     phone_1: "34567890123",
    //     phone_2: "45678901234",
    //     review: "Always polite.",
    //   },
    // ]);

    // await Supplier.bulkCreate([
    //   {
    //     first_name: "Supplier A",
    //     last_name: "A",
    //     national_id: "98765432109876",
    //     address: "123 Maple St",
    //     phone_1: "98765432109",
    //     phone_2: "87654321098",
    //     review: "Reliable supplier.",
    //   },
    //   {
    //     first_name: "Supplier B",
    //     last_name: "B",
    //     national_id: "87654321098765",
    //     address: "789 Pine St",
    //     phone_1: "87654321098",
    //     phone_2: "76543210987",
    //     review: "Fast delivery.",
    //   },
    //   {
    //     first_name: "Supplier C",
    //     last_name: "C",
    //     national_id: "76543210987654",
    //     address: "567 Oak Ave",
    //     phone_1: "76543210987",
    //     phone_2: "65432109876",
    //     review: "Great quality products.",
    //   },
    // ]);

    await Purchase.bulkCreate([
      {
        purchase_id: 1,
        supplier_id: 1,
        product_id: 1,
        quantity: 10,
        purchasing_price: 150.0,
        discount: 0.0,
        paid_cash: 1400.0,
        stock_id: 1,
        no_good_returns: 2,
        no_bad_returns: 1,
        purchase_date: "2023-08-10",
      },
      // {
      //   purchase_id: 2,
      //   supplier_id: 2,
      //   product_id: 2,
      //   quantity: 8,
      //   purchasing_price: 400.0,
      //   discount: 50.0,
      //   paid_cash: 3300.0,
      //   stock_id: 2,
      //   no_good_returns: 0,
      //   no_bad_returns: 0,
      //   purchase_date: "2023-08-09",
      // },
      // {
      //   purchase_id: 3,
      //   supplier_id: 3,
      //   product_id: 3,
      //   quantity: 15,
      //   purchasing_price: 10.0,
      //   discount: 0.0,
      //   paid_cash: 225.0,
      //   stock_id: 1,
      //   no_good_returns: 0,
      //   no_bad_returns: 0,
      //   purchase_date: "2023-08-08",
      // },
      // {
      //   purchase_id: 4,
      //   supplier_id: 1,
      //   product_id: 4,
      //   quantity: 3,
      //   purchasing_price: 50.0,
      //   discount: 5.0,
      //   paid_cash: 142.48,
      //   stock_id: 2,
      //   no_good_returns: 1,
      //   no_bad_returns: 0,
      //   purchase_date: "2023-08-07",
      // },
      // {
      //   purchase_id: 5,
      //   supplier_id: 2,
      //   product_id: 5,
      //   quantity: 6,
      //   purchasing_price: 800.0,
      //   discount: 30.0,
      //   paid_cash: 4740.0,
      //   stock_id: 1,
      //   no_good_returns: 0,
      //   no_bad_returns: 0,
      //   purchase_date: "2023-08-06",
      // },
      // // ... Add other purchase entries
    ]);

    // await Sale.bulkCreate([
    //   {
    //     sale_id: 1,
    //     client_id: 1,
    //     product_id: 1,
    //     quantity: 3,
    //     discount: 10.0,
    //     payment_type: "cash",
    //     paid_cash: 580.0,
    //     remaining_cash: 0.0,
    //     sale_date: "2023-08-15",
    //     no_good_returns: 2,
    //     no_bad_returns: 1,
    //   },
    //   {
    //     sale_id: 2,

    //     client_id: 2,
    //     product_id: 2,
    //     quantity: 2,
    //     discount: 20.0,
    //     payment_type: "cash",
    //     paid_cash: 930.0,
    //     remaining_cash: 0.0,
    //     sale_date: "2023-08-14",
    //     no_good_returns: 1,
    //     no_bad_returns: 0,
    //   },
    //   {
    //     sale_id: 3,

    //     client_id: 3,
    //     product_id: 3,
    //     quantity: 5,
    //     discount: 0.0,
    //     payment_type: "cash",
    //     paid_cash: 75.0,
    //     remaining_cash: 0.0,
    //     sale_date: "2023-08-13",
    //     no_good_returns: 0,
    //     no_bad_returns: 0,
    //   },
    //   {
    //     sale_id: 4,

    //     client_id: 1,
    //     product_id: 4,
    //     quantity: 1,
    //     discount: 5.0,
    //     payment_type: "cash",
    //     paid_cash: 65.0,
    //     remaining_cash: 0.0,
    //     sale_date: "2023-08-12",
    //     no_good_returns: 1,
    //     no_bad_returns: 0,
    //   },
    //   {
    //     sale_id: 5,

    //     client_id: 3,
    //     product_id: 1,
    //     quantity: 4,
    //     discount: 0.0,
    //     payment_type: "cash",
    //     paid_cash: 800.0,
    //     remaining_cash: 0.0,
    //     sale_date: "2023-08-11",
    //     no_good_returns: 0,
    //     no_bad_returns: 0,
    //   },
    //   // ... Add other sale entries
    // ]);

    console.log("Demo data inserted successfully.");
  } catch (error) {
    console.error("Error inserting demo data:", error);
  }
};

module.exports = insertDemoData;
