var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

/* GET home page. */
router.get('/', function(req, res, next) {
  productController.getAllProducts({})
    .then((products) => {
      res.render('index', { products: products });
    })
    .catch((error) => {
      res.render('error', {message: 'Error', error: error});
    });
});

router.get('/filter', function(req, res, next) {
  
  let category = req.query.category;

  productController.findAllProductByCategory(category)
    .then((products) => {

      if (products.length === 0) {
        res.render('no-product', { message: 'No Product exist. Search something else!' });
      } else {
        res.render('index', { products: products });
      }
    })
    .catch((error) => {
      res.render('error', {message: 'Error', error: error});
    });

});

module.exports = router;
