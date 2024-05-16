const Project = require('../models/projectModel');


// bech tjik req el body mte3ha fih kol el ma3loumat 3al projet kima essmou, el use mte3ou wel mockup ell fih w t9ollek assn3ou don create w t3adi fi wostha el bady mte3 requet ..nej7et traje3 messge mte3 nje7 feshlet traje3 messge ta3 fashal
 // projectController.js



/*
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
};*/
//create new project
exports.createnewProject=async(req,res)=>{ 
    const {project_name,Date,owner,members,mockups}=req.body;
    if(!project_name||project_name.length===0 || !owner){
        return res.status(400).json({ error: 'les champs de project name and owner sont obligatoiiires' });
    }

    try{
        const project= await Project.create({project_name,Date,owner,members,mockups}); 
        res.status(201).json({ message: 'Projet créé avec succès.', project });
    } 
    catch(err){ 
        res.status(500).json({ message: err.message });

    }
} 

//get all project for one user les projets elli el user fihom owner w ella members 

exports.getAllProjectsForOneuser = async (req, res) => {
    try {
        const userId = req.params.userId; 
        const projects = await Project.find({  
            $or:[ 
                {owner: userId} , 
                {members:userId}
            ]
            
             });
         
        if(!projects || projects.length === 0){
            return res.status(404).json({error:'no projects for this user'})
        } 
        res.json(projects); 
      } catch (error) {
        
        res.status(500).json({ error: error.message });
      }
};
//projet be id mte3ou 
exports.getProjectById = async (req, res) => { 
    const projectId=req.params.id;
    try {
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//al9a el projet bel id mte3ou w men ba3ed 3addilou el donee elli fel body
exports.updateProject = async (req, res) => { 
    const projectId=req.params.id;
    try {
        const project = await Project.findByIdAndUpdate(projectId, req.body);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteProject = async (req, res) => { 
    const projectId=req.params.id;
    try {
        const project = await Project.findByIdAndDelete(projectId);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json("project deleted");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 


/*
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
    
} */





