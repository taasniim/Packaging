const Mockup = require('../models/mockupModel')
const asyncHandler = require('express-async-handler')

const getMockups= asyncHandler(async(req,res) =>{
    try{
        
        const mockups = await Mockup.find({})
        res.status(200).json(mockups);
        
    }catch(error){
       
        res.status(500);
        throw new Error(error.message);
    }
})
// get a single mockup
const getOneMockup= asyncHandler(async(req,res) =>{
    try{
        const{id}=req.params;
        const mockup = await Mockup.findById(id);
        res.status(200).json(mockup);
        
    }catch(error){
        res.status(500);
        throw new Error(error.message);
     
    }
})

//create mockup
const createMockup =asyncHandler(async(req,res) =>{
    try{
        
        const mockup = await Mockup.create(req.body)
        res.status(200).json(mockup);
        
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})
//update mockup
const updatemockup=asyncHandler(async(req,res)=> {
    try {
        const {id}=req.params;
        const mockup =await Mockup.findByIdAndUpdate(id,req.body);
        //cannot find any mockup in db 
        if(!mockup){
            return res.status(404).json({message:'cannot found mockup with id:${id}'})
        }
        const updatedMockup = await Mockup.findById(id);
        res.status(200).json(updatedMockup);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})
//delete mockup
const deleteMockup = asyncHandler(async(req,res)=> {
    try {
        const {id}=req.params;
        const mockup =await Mockup.findByIdAndDelete(id);
        //cannot find any mockup in db 
        if(!mockup){
            res.status(404);
            throw new Error(`cannot found mockup with id ${id}`);
        }
       
        res.status(200).json("mockup deleted");
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
} )
module.exports={
    getMockups,
    getOneMockup,
    createMockup,
    updatemockup,
    deleteMockup
}