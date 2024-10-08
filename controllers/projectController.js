const projectModel = 
  require("../models/projectModel");

async function getAllProjects(req, res) {
  const projects = await projectModel.getAllProjects();
  
  if (projects.length > 0) 
    res.status(200).json(projects);
  else 
    res.status(404).json({ code:404, message: "No se encontraron proyectos" });
}

async function createProject(req, res) {
  //Validaciones de estructura
  const newProject = 
    await projectModel.createProject(req.body);
  res.status(201).json(newProject);
}

module.exports = {
  getAllProjects,
  createProject
}