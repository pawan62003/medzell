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
    const regexPattern = keyword.split(' ').map(term => `(?=.*${term})`).join('');

    // console.log(keyword)
    try {
   if(keyword){
    const data =  await ProductModel.find({ title: { $regex: regexPattern, $options: 'i' }}||{category: { $regex: regexPattern, $options: 'i' }})
    .sort({ premium: -1, review: -1 });
    res.send(data)
   }else{
    const data = await ProductModel.find();
    res.send(data).sort({ premium: -1, review: -1 })
   }

    } catch (error) {
        res.send({"msg":error})
    }
})

module.exports = {
    ProductRoute
}