var express = require('express');
const { ConnectionCheckOutFailedEvent } = require('mongodb');
var router = express.Router();
let productModel = require('../schemas/category')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let categories = await categoryModel.find({});
  res.status(200).send({
    success:true,
    data:categories
  });
});

router.post('/', async function(req, res, next) {
  try {
    let newCategory = new categoryModel({
      name: req.body.name,
      description:req.body.description,
    })
    await newCategory.save();
    res.status(200).send({
      success:true,
      data:newCategory
    });
  } catch (error) {
    res.status(404).send({
      success:false,
      message:error.message
    });
  }
});

//cập nhật loại sản phẩm
router.put('/:id', async function(req, res, next) {
  try {
    let categories = await categoryModel.findById(req.params.id);
    categories.name = req.body.name;
    categories.description = req.body.description;
    await categories.save();
    res.status(200).send({
      success:true,
      data:categories
    });
  } catch (error) {
    res.status(404).send({
      success:false,
      message:error.message
    });
  }
});

//xóa loại sản phẩm
router.delete('/:id', async function(req, res, next) {
  try {
    let categories = await categoryModel.findById(req.params.id);
    categories.isDeleted = true;
    await categories.save();
    res.status(200).send({
      success:true,
      data:categories
    });
  } catch (error) {
    res.status(404).send({
      success:false,
      message:error.message
    });
  }
});

module.exports = router;