const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get('/random', (req, res) => {
  try {
    const fullPath = path.resolve('../finesse-server/src/data/products.json');
    const products = JSON.parse(fs.readFileSync(fullPath, { encoding: 'utf-8', flag: 'r' }));
    const idx = Math.floor(Math.random() * products.length);
    const selectedProduct = products[idx];
    res.status(200).json(selectedProduct);
  }
  catch (e) {
    console.log(__dirname)
    console.log(e)
    res.status(500).json(e);
  }
});

module.exports = router;
