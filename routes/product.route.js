const express = require('express')
const {ProductModel} = require('../model/product.model')
const ProductRoute = express.Router();

ProductRoute.post("/",async(req,res)=>{
    const addpro = new ProductModel(req.body)
            await addpro.save()
            res.send({"msg":"your product is successfully added in database"})
        
})

ProductRoute.get("/",async(req,res)=>{
    const keyword = req.query.keyword;
    console.log(keyword)
    try {
   if(keyword){
    const data =  await ProductModel.find({ title: { $regex: keyword, $options: 'i' }}||{category: { $regex: keyword, $options: 'i' }})
    .sort({ premium: -1, review: -1 });
    res.send(data)
   }else{
    const data = await ProductModel.find();
    res.send(data)
   }

    } catch (error) {
        res.send({"msg":error})
    }
})

module.exports = {
    ProductRoute
}