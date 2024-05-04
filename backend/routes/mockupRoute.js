const express = require('express')

const router = express.Router()
const Mockup = require('../models/mockupModel');
const {getMockups,getOneMockup,createMockup ,updatemockup,deleteMockup} = require('../controllers/mockupController')

// get all mockups 
router.get('/',getMockups)
// get mockup by id 
router.get('/:id',getOneMockup)
//add mockup
router.post('/',createMockup)
//update
router.put('/:id',updatemockup)
//delete mockup
router.delete('/:id',deleteMockup)

module.exports = router;

