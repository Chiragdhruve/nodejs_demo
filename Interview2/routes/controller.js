const express = require('express');
const router = express.Router();

const categoryModel = require('../models/category');
const productModel = require('../models/product');

router.route('/product').post((req, res) => {
    console.log(req.body)
    console.log("file",req.file);
     
    // var form = new multiparty.Form();
    productModel.create(req.body, (err, result) => {
        let return_data = {};
        if (err) {
            return_data.code = 0,
            return_data.message = "err";
            res.send(return_data)
        } else {
            console.log("result is :",result);
            return_data.code = 200,
            return_data.message = "success",
           // res.json({ fileUrl: 'http://localhost:3000/images/' + req.file.filename });
            return_data.data = result;
            res.send(return_data)
        }
    })    
})

router.route('/category').post((req, res) => {
    console.log(req.body)
    req.body.price = parseInt(req.body.price);
    req.body.cretedAt = new Date();
    categoryModel.create(req.body, (err, result) => {
        let return_data = {};
        if (err) {
            return_data.code = 0,
            return_data.message = "err";
            res.send(return_data)
        } else {
            console.log("resukt",result);
            return_data.data = result;
            return_data.code = 200,
            return_data.message = "success",
            res.send(return_data)
        }
    }) 
    debugger
});


router.route('/categoryAll').get((req, res) => {
    console.log(req.body);
    categoryModel.getAll(req.body, (err, result) => {
        let return_data = {};
        if (err) {
            return_data.code = 0,
            return_data.message = "err";
            res.send(return_data)
        } else {
            console.log("result",result);
            return_data.code = 200,
            return_data.message = "success",
            return_data.data = result;
            res.send(return_data)
        }
    }) 
    debugger
});

module.exports = router