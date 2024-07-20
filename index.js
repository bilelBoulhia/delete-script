const { initializeApp } = require("firebase/app");
const { getDatabase, remove, ref } = require("firebase/database");


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};


const fb_app = initializeApp(firebaseConfig);
const db = getDatabase(fb_app);
const reference = 'reports/';


const removeData = () => {
    remove(ref(db, reference))
        .then(() => console.log('Data removed'))
        .catch(error => console.error('Error:', error));
};


setInterval(removeData, 108);
