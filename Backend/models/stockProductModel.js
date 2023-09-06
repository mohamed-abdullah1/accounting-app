const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust the path to the database connection

// const Sale = require("./saleModel");
// const Purchase = require("./purchaseModel");

const StockProduct = sequelize.define(
  "StockProduct",
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sold_quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    purchased_quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  }
);

// StockProduct.belongsTo(Sale, { foreignKey: "product_id" }); // Assuming "product_id" is the correct foreign key for Sale
// StockProduct.belongsTo(Purchase, { foreignKey: "product_id" }); // Assuming "product_id" is the correct foreign key for Purchase

module.exports = StockProduct;
