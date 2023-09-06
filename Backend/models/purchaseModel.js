const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust the path to the database connection
const Stock = require("./stockModel");
const Supplier = require("./supplierModel");
const Product = require("./productModel");


const Purchase = sequelize.define(
  "Purchase",
  {
    purchase_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    // Add foreign key columns for product_id and stock_id
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Product",
        key: "product_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    },
    supplier_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Supplier",
        key: "supplier_id",
      },
    },

    stock_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Stock",
        key: "stock_id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purchasing_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    discount: DataTypes.DECIMAL(10, 2),

    paid_cash: DataTypes.DECIMAL(10, 2),

    no_good_returns: DataTypes.INTEGER,

    no_bad_returns: DataTypes.INTEGER,

    purchase_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }
  //   { timestamps: false }
);

// Purchase.belongsTo(Stock, { foreignKey: "stock_id" });

module.exports = Purchase;
