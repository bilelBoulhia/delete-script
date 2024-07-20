const { initializeApp } = require("firebase/app");
const { getDatabase, remove, ref } = require("firebase/database");
const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    databaseURL: 'https://winrahtrain-default-rtdb.europe-west1.firebasedatabase.app/',
};

const fb_app = initializeApp(firebaseConfig);
const db = getDatabase(fb_app);
const reference = 'reports/';

const removeData = () => {
    remove(ref(db, reference))
        .then(() => console.log('success'))
        .catch(error => console.error('Error:', error));
};


router.get('/delete-db', (req, res) => {
    removeData();
    res.status(200).json({ message: 'deletion started' });
});


setInterval(removeData, 108);

app.use('/.netlify/functions/app', router);

module.exports.handler = serverless(app);