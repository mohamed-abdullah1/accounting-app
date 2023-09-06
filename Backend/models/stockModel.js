const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); //  database connection

const Stock = sequelize.define(
  "Stock",
  {
    stock_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    stock_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: DataTypes.STRING,
  },
  { timestamps: false }
);

module.exports = Stock;
