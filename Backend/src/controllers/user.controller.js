const express=require("express");
const router=express.Router();
const fetch= require('node-fetch')

router.get("", async(req,res)=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{res.send({data})})
    .catch((err)=>{res.send(err)})
})
module.exports=router