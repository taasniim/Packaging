// projectController.js

const Project = require('../models/projectModel');
// bech tjik req el body mte3ha fih kol el ma3loumat 3al projet kima essmou, el use mte3ou wel mockup ell fih w t9ollek assn3ou don create w t3adi fi wostha el bady mte3 requet ..nej7et traje3 messge mte3 nje7 feshlet traje3 messge ta3 fashal
 // projectController.js



// Fonction pour créer un nouveau projet
exports.createProject = async (req, res) => {
    const { project_name, members, mockup } = req.body;

    // Validation des entrées
    if (!project_name) {
        return res.status(400).json({ message: 'Le nom du projet est requis.' });
    }

    if (members && !Array.isArray(members)) {
        return res.status(400).json({ message: 'Les membres doivent être une liste d\'identifiants d\'utilisateur.' });
    }

    if (mockup && !Array.isArray(mockup)) {
        return res.status(400).json({ message: 'Les maquettes doivent être une liste d\'identifiants de maquette.' });
    }

    try {
        // Création du projet
        const project = new Project({
            project_name,
        
            members,
            mockup
        });

        // Sauvegarde du projet dans la base de données
        await project.save();

        // Réponse avec le projet créé
        res.status(201).json(project);
    } catch (err) {
        // Gestion des erreurs et envoi d'un message d'erreur détaillé
        res.status(500).json({ message: 'Une erreur est survenue lors de la création du projet.', error: err.message });
    }
};

exports.createnewProject=async(req,res)=>{ 
    const owner=req.params.ownerId;

    try{

    } 
    catch(err){ 
        res.status(500).json({ message: err.message });

    }
}

exports.getAllProjects = async (req, res) => {
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
};

exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json("project deleted");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 
exports.getAllProjectsbyuser = async (req, res) => {
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
}; 


exports.getoneProjectbyuser=async(req,res)=>{
try{
    const idProject=req.params.id; 
    const userId=req.params.userId; 
    const project = await Project.findOne({ _id: idProject, members: userId }); 
    if(!project){
        return(res.status(404).json("projet introuvable"))
    } 

return(res.status(200).json(project))

}catch (error) {
    res.status(500).json({  error: error.message });
}
    
} 





