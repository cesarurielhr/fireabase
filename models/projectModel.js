const { collection, getDocs } = require("firebase/firestore");
const { v4: uuidv4 } = require("uuid");


const { db } = require("../firebase/firebaseConfig");


async function getAllProjects() {
  const querySnapshot = await getDocs(collection(db, "proyectos"));
  const projects = querySnapshot.docs.map(doc => {
    
    data = doc.data();
    data.id = doc.id;
    
    return data;
  });
  
  return projects;
}

function createProject(data) {
  const newProject = {
    id: uuidv4(),
    name: data.name,
    description: data.description,
    startDate: data.startDate,
    endDate: data.endDate,
    status: data.status,
    budget: data.budget
  };
  projects.push(newProject);
  return newProject;
}

module.exports = {
  getAllProjects,
  createProject
}