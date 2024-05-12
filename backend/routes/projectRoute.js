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
router.get('/users/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
  
      // Récupérer les projets associés à l'ID de l'utilisateur
      const projects = await Project.find({ members: userId });
  
      // Renvoyer les projets récupérés en réponse
      res.json(projects);
    } catch (error) {
      console.error('Error fetching user projects:', error);
      res.status(500).json({ error: 'Failed to fetch user projects' });
    }
  });
module.exports = router;

