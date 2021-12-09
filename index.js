'use strict';

// Firebase init
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require("./config/serviceAccountKey.json");

try{ 
    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fir-5b.firebaseio.com"
})} catch(err){ admin.app() }

const api_v2 = require('./api_v2');

exports.api_v2 = functions.https.onRequest(api_v2);
