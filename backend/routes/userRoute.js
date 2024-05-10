const express = require('express')

const router = express.Router()
const User = require('../models/user');
const {getAllUsers,getOneUser ,updateUser,deleteUser , register} = require('../controllers/userController')

// get all User 
router.get('/',getAllUsers)
// get User by id 
router.get('/:id',getOneUser)

//update
router.put('/:id',updateUser)
//delete User
router.delete('/:id',deleteUser)
//register
router.post("/signup",register)



module.exports = router;

