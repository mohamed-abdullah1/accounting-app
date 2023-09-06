const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Database connection

const Client = sequelize.define(
  "Client",
  {
    client_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true, // This ensures the id is unique
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    national_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: 14,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_1: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      length: 11,
    },
    phone_2: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      length: 11,
    },
    review: DataTypes.TEXT,
  },
  {
    timestamps: false,
  }
);



module.exports = Client;
