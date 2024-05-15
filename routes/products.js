//3
// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// Lấy danh sách sản phẩm
router.get('/products', (req, res) => {
  Product.getAll((err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server Error' });
    }
    res.json(results);
  });
});

// Thêm sản phẩm mới
router.post('/products', (req, res) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price
  };

  Product.create(newProduct, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server Error' });
    }
    res.json({ id: results.insertId, ...newProduct });
  });
});

// Xóa sản phẩm
router.delete('/products/:id', (req, res) => {
  const productId = req.params.id;

  Product.delete(productId, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server Error' });
    }
    res.json({ message: 'Product deleted successfully' });
  });
});

module.exports = router;
