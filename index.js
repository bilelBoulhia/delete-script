const { initializeApp } = require("firebase/app");
const { getDatabase, remove, ref } = require("firebase/database");

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCJn2KtHEeHNIdQMSLrcNsheQZIBMiIck",
    authDomain: "winrahtrain.firebaseapp.com",
    projectId: "winrahtrain",
    storageBucket: "winrahtrain.appspot.com",
    messagingSenderId: "109651923705",
    appId: "1:109651923705:web:2de5f243acaeeaa7204828",
    databaseURL: "https://winrahtrain-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const fb_app = initializeApp(firebaseConfig);
const db = getDatabase(fb_app);
const reference = 'reports/';

// Function to remove the data
const removeData = () => {
    remove(ref(db, reference))
        .then(() => console.log('Data removed successfully'))
        .catch(error => console.error('Error removing data:', error));
};


setInterval(removeData, 10800000);
