const Category = require("../models/categoryModel");
const Client = require("../models/clientModel");
const Product = require("../models/productModel");
const Purchase = require("../models/purchaseModel");
const Sale = require("../models/salesModel");
const Stock = require("../models/stockModel");
const StockProduct = require("../models/stockProductModel");
const Supplier = require("../models/supplierModel");

// Define associations

// Category - Product (One-to-Many)
Product.belongsTo(Category /* { foreignKey: "category_id" }*/);
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "cascade",
  onUpdate: "cascade",
});

// Stock - Product (Many-to-Many through StockProduct)
Stock.belongsToMany(Product, {
  through: "StockProduct",
  foreignKey: "stock_id",
});
Product.belongsToMany(Stock, {
  through: "StockProduct",
  foreignKey: "product_id",
  onDelete: "cascade",
  onUpdate: "cascade",
});

// Supplier - Product (Many-to-Many through Purchase)
Supplier.belongsToMany(Product, {
  through: "Purchase",
  foreignKey: "supplier_id",
});
Product.belongsToMany(Supplier, {
  through: "Purchase",
  foreignKey: "product_id",
  onDelete: "cascade",
  onUpdate: "cascade",
});

// Product - Client (Many-to-Many through Sale)
Product.belongsToMany(Client, {
  through: "Sale",
  foreignKey: "product_id",
});
Client.belongsToMany(Product, { through: "Sale", foreignKey: "client_id" });

// // Stock - Purchase (One-to-Many)
Stock.hasMany(Purchase, { foreignKey: "stock_id" });
Purchase.belongsTo(Stock, { foreignKey: "stock_id" });

// // Stock - Sale (One-to-Many)
Sale.belongsTo(Stock, { foreignKey: "stock_id" });
Stock.hasMany(Sale, { foreignKey: "stock_id" });

Stock.hasMany(StockProduct, { foreignKey: "stock_id" });
