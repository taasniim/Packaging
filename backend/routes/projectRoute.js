const express = require('express')

const router = express.Router()
const Project = require('../models/projectModel');
const {getAllProjects,getProjectById,createProject ,updateProject,deleteProject} = require('../controllers/projectController')

// get all mockups 
router.get('/',getAllProjects)
// get mockup by id 
router.get('/:id',getProjectById)
//add mockup
router.post('/',createProject)
//update
router.put('/:id',updateProject)
//delete mockup
router.delete('/:id',deleteProject)

module.exports = router;

