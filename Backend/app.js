const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const AppError = require("./utils/appError");

const stockRoute = require("./routes/stockRoute");
const clientRoute = require("./routes/clientRoute");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");
const supplierRoute = require("./routes/supplierRoute");
const purchaseRoute = require("./routes/purchaseRoute");

dotenv.config({ path: "config.env" }); // Load config file into process.env object

const app = express();

// [1] MIDDLEWARES
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

// [2] ROUTES
app.use("/api/v1/stock", stockRoute);
app.use("/api/v1/client", clientRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/supplier", supplierRoute);
app.use("/api/v1/purchase", purchaseRoute);

// [3] ERROR HANDLING
// Catch all unhandled routes
app.all("*", (req, res, next) => {
  next(
    new AppError(`Can't find this route ${req.originalUrl} on this server`, 400)
  );
});

// Global error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app;
