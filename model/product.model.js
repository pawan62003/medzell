const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    image:{type:String,require:true},
    title:{type:String,require:true},
    review:{type:Number,require:true},
    category:{type:String,require:true},
    premium:{type:Boolean,require:true}
},{
    versionKey:false
})

const ProductModel = mongoose.model('product',ProductSchema);

module.exports={
    ProductModel
}