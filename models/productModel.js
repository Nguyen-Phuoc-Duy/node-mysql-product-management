//2
// models/productModel.js
const db = require('../db');

const Product = {
  getAll: (callback) => {
    const query = 'SELECT * FROM products';
    db.query(query, callback);
  },

  create: (productData, callback) => {
    const query = 'INSERT INTO products (name, price) VALUES (?, ?)';
    db.query(query, [productData.name, productData.price], callback);
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM products WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = Product;
