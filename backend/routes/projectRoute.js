const express = require('express')

const router = express.Router()
const Project = require('../models/projectModel');
const {getAllProjects,getProjectById,createProject ,updateProject,deleteProject,getAllProjectsbyuser,getoneProjectbyuser} = require('../controllers/projectController')

// get all mockups 
router.get('/',getAllProjects)
// get mockup by id 
router.get('/:id',getProjectById)
// /api/project/
router.post('/',createProject)
// /api/project/:id
router.put('/:id',updateProject)
// /api/project/:id
router.delete('/:id',deleteProject)
//  /api/project/:userId
router.get('/:userId',getAllProjectsbyuser) 

// /api/project/:UserId/:id 
router.get('/:userId/:id',getoneProjectbyuser)

module.exports = router;

