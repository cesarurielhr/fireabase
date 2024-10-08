const { collection, getDocs, addDoc } = require("firebase/firestore");
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

async function createProject(data) {

  let docRef;

  const newProject = {
    name: data.name,
    description: data.description,
    startDate: data.startDate,
    endDate: data.endDate,
    status: data.status,
    budget: data.budget
  }

  try {
    docRef = await addDoc(collection(db, "proyectos"), newProject);

    newProject.id = docRef.id;


  } catch (e) {
    console.error("Error adding document: ", e);
  }

  return newProject;
}

module.exports = {
  getAllProjects,
  createProject
}