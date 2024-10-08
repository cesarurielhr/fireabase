// Importar funciones de Firebase usando CommonJS
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

// Configuración de tu proyecto de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCdN2a2WCAHEJnaSy0wwi8PC0IOUdyKJ6Q",
    authDomain: "serviciosweb-914a9.firebaseapp.com",
    projectId: "serviciosweb-914a9",
    storageBucket: "serviciosweb-914a9.appspot.com",
    messagingSenderId: "148354115575",
    appId: "1:148354115575:web:5e3ca87f171cb8c005b0f2"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Cloud Firestore y obtener una referencia al servicio
const db = getFirestore(app);

// Exportar la instancia de la aplicación y la base de datos
module.exports = { app, db };