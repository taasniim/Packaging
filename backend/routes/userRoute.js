const express = require('express')

const router = express.Router()
const User = require('../models/user');
const {getAllUsers,getOneUser,createUser ,updateUser,deleteUser} = require('../controllers/userController')

// get all User 
router.get('/',getAllUsers)
// get User by id 
router.get('/:id',getOneUser)
//add User
router.post('/',createUser)
//update
router.put('/:id',updateUser)
//delete User
router.delete('/:id',deleteUser)

module.exports = router;

