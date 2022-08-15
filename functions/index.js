const functions = require("firebase-functions");
const express = require('express')

const app = express();

const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert('./credentials.json'),
})

app.get('/hello-world', (req, res) => {
    return res.status(200).json({ message: 'hello world' })
});

app.use(require('./routes/products.routes'));

exports.app = functions.https.onRequest(app);