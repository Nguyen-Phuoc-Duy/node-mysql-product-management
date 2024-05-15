//4
// index.js
const express = require("express");
const productRoutes = require("./routes/products");
const app = express();
const PORT = process.env.PORT || 5000;

// Sử dụng JSON middleware
app.use(express.json());

// Sử dụng API routes
app.use("/api", productRoutes);

// Khởi chạy máy chủ
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
