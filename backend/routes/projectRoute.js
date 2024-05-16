const express = require('express')

const router = express.Router()
const Project = require('../models/projectModel');
const {createnewProject,getAllProjectsForOneuser,getProjectById,updateProject,deleteProject} = require('../controllers/projectController')


// create neww project 
router.post('/',createnewProject); 

// get all projects for one user 
router.get('/:userId',getAllProjectsForOneuser);

// get project by son id  
router.get('/:id',getProjectById)

// /api/project/:id
router.put('/:id',updateProject)
// /api/project/:id
router.delete('/:id',deleteProject)





module.exports = router;

