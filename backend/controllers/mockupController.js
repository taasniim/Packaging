const Mockup = require('../models/mockupModel')
const asyncHandler = require('express-async-handler')

//tjik req t9ollek hetkol chy traj3elha kol chy le bi id la chy
const getMockups= asyncHandler(async(req,res) =>{
    try{
        
        const mockups = await Mockup.find({})
        res.status(200).json(mockups);
        
    }catch(error){
       
        res.status(500);
        throw new Error(error.message);
    }
})
// tjik req t9ollek 7achti bmockup mou3ayna traje3halha 
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

//create mockup: tjik req ta3tik ma3loumet 3al mockuop fel body mte3ha w t9ollek asne3hali donc tasna3ha bel create w traja3ha fel res
const createMockup =asyncHandler(async(req,res) =>{
    try{
        
        const mockup = await Mockup.create(req.body)
        res.status(200).json(mockup);
        
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})
//update mockup : bech tjik req t9ollek brabi updatili el mockup hedi elli el id fel param mte3i w t9ollek hwaka el info fel body 
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
//delete mockup: bech tjik req t9ollek el maquette eli el id mte3ha fel params mte3i n7ebek tfdas5ha w tfasa5ha 
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