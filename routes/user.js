const express=require("express");
const userRouter=express.Router( );
//add user
 userRouter.post("/add",async(req,res)=>{
    try{
let newuser=new User(req.body);
let result=await newuser.save();
res.send({users:result,msg:"new user is added"})
    }catch(error){
        console.log(error)

    }
 })
//get all users
userRouter.get("/",async(req,res)=>{
    try{
let result=await newuser.find();
res.send({users:result,msg:"all users"})
    }catch(error){
        console.log(error)

    }
 })
//get user by id


userRouter.get("/ :id",async(req,res)=>{
    try{
let result=await newuser.findById(req.params.id);
res.send({user:result,msg:"one user"})
    }catch(error){
        console.log(error)

    }
 })

//delete us


userRouter.delete("/ :id",async(req,res)=>{
    try{
let result=await newuser.findByIdAndDelete(req.params.id);
res.send({msg:" user is delete"})
    }catch(error){
        console.log(error)

    }
 })
 //up date
 userRouter.put("/ :id",async(req,res)=>{
    try{
let result=await newuser.findByIdAndUpdate(
    { _id:req.params.id},
    {$set:{...req.body}}
);
res.send({msg:" user isup date"})
    }catch(error){
        console.log(error)

    }
 })
module.exports=userRouter