const User = require('../models/user')
const asyncHandler = require('express-async-handler')

const getAllUsers= asyncHandler(async(req,res) =>{
    try{
        
        const users = await User.find({})
        res.status(200).json(users);
        
    }catch(error){
       
        res.status(500);
        throw new Error(error.message);
    }
})
// get a single user
const getOneUser = asyncHandler(async(req,res) =>{
    try{
        const{id}=req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
        
    }catch(error){
        res.status(500);
        throw new Error(error.message);
     
    }
})

//create user
const createUser =asyncHandler(async(req,res) =>{
    try{
        
        const user = await User.create(req.body)
        res.status(200).json(user);
        
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})
//update user
const updateUser=asyncHandler(async(req,res)=> {
    try {
        const {id}=req.params;
        const user =await User.findByIdAndUpdate(id,req.body);
        //cannot find any mockup in db 
        if(!user){
            return res.status(404).json({message:'cannot found user with id:${id}'})
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})
//delete user
const deleteUser = asyncHandler(async(req,res)=> {
    try {
        const {id}=req.params;
        const user =await User.findByIdAndDelete(id);
        //cannot find any user in db 
        if(!user){
            res.status(404);
            throw new Error(`cannot found mockup with id ${id}`);
        }
       
        res.status(200).json("user deleted");
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
} )
module.exports={
    getAllUsers,
    getOneUser ,
    createUser,
    updateUser,
    deleteUser
}