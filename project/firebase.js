import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCAcIzcphTmhGIb09Tq7CMA6oAnpVbc8DM",
    authDomain: "global-project-d6644.firebaseapp.com",
    databaseURL: "https://global-project-d6644.firebaseio.com",
    projectId: "global-project-d6644",
    storageBucket: "global-project-d6644.appspot.com",
    messagingSenderId: "524645160819"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();


export {
    firebaseDB
}