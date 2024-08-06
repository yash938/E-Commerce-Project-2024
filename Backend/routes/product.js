const express = require("express");
const router = express.Router();

const Product = require("../models/productModel");


//create product --admin
router.post("/createProduct", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(400).json({
            success: false,
            message: error.message,
            errors: error.errors
        });
    }
});


//getall product
router.get("/getallProducts",async(req,res)=>{
    const products = await Product.find();

    res.status(200).json({
        success:true,
        products
    })
})


//get Product details
router.get("/getOneProduct/:id",async(req,res)=>{
    let product = await Product.findById(req.params.id);


    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
      }

      res.status(200).json({
        success:true,
        product
    })
})

//update product --admin
router.put("/update/:id",async (req,res)=>{
    let product = await Product.findById(req.params.id);


    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
     product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
     })

     res.status(200).json({
        success:true,
        product
     })
})


//delete product
router.delete("/deleteProduct/:id",async (req,res)=>{
      const product = await Product.findById(req.params.id);

      if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
      }

    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"product deleted"
    })
})

module.exports = router;
