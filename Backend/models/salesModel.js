const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust the path to the database connection

const Sale = sequelize.define(
  "Sale",
  {
    sale_id: {
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
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Client",
        key: "client_id",
      },
    },

    stock_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Stock",
        key: "stock_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min: 1,
    },
    discount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    payment_type: {
      type: DataTypes.ENUM("cash", "credit"),
      defaultValue: "cash",
    },
    paid_cash: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    remaining_cash: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    no_good_returns: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    no_bad_returns: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    sale_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }
  // { timestamps: false }
);

// Sale.belongsTo(Stock, { foreignKey: "stock_id" });

module.exports = Sale;
