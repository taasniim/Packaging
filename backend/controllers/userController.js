const User = require('../models/user')
const asyncHandler = require('express-async-handler')
const bcrypt=require("bcrypt")


//register user
const register = asyncHandler(async (req, res) => {
    // Génération du sel de hachage
    const salt = await bcrypt.genSalt(10); // Utilisation de await car genSalt retourne une promesse
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Création d'un nouvel utilisateur avec le mot de passe haché
    const newUser = new User({
        ...req.body,
        password: hash
    });

    try {
        // Sauvegarde de l'utilisateur dans la base de données
        const savedUser = await newUser.save();
        res.status(201).json({
            success: true,
            message: "Utilisateur créé avec succès",
            data: savedUser
        });
    } catch (error) {
        // Gestion des erreurs lors de la sauvegarde de l'utilisateur
        res.status(400).json({
            success: false,
            message: "Échec de la création de l'utilisateur",
            error: error.message
        });
    }
});


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
    updateUser,
    deleteUser,
    register
}