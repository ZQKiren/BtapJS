var express = require('express');
const { ConnectionCheckOutFailedEvent } = require('mongodb');
var router = express.Router();
let productModel = require('../schemas/product')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let products = await productModel.find({});
  res.status(200).send({
    success:true,
    data:products
  });
});

router.post('/', async function(req, res, next) {
  try {
    let newProduct = new productModel({
      name: req.body.name,
      price:req.body.price,
      quantity: req.body.quantity,
      category:req.body.category
    })
    await newProduct.save();
    res.status(200).send({
      success:true,
      data:newProduct
    });
  } catch (error) {
    res.status(404).send({
      success:false,
      message:error.message
    });
  }
});

// // xóa mềm sản phẩm
// router.delete('/:id', async function(req, res, next) {
//   try {
//     let products = await productModel.findById(req.params.id);
//     products.isDeleted = true;
//     await products.save();
//     res.status(200).send({
//       success:true,
//       data:products
//     });
//   } catch (error) {
//     res.status(404).send({
//       success:false,
//       message:error.message
//     });
//   }
// });

// // cập nhật sản phẩm 
// router.put('/:id', async function(req, res, next) {
//   try {
//     let products = await productModel.findById(req.params.id);
//     products.name = req.body.name;
//     products.price = req.body.price;
//     products.quantity = req.body.quantity;
//     products.category = req.body.category;
//     await product.save();
//     res.status(200).send({
//       success:true,
//       data:products
//     });
//   } catch (error) {
//     res.status(404).send({
//       success:false,
//       message:error.message
//     });
//   }
// });

module.exports = router;


