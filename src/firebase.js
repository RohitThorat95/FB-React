import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCubAUl8w1oGwzZJmtQVv8UY9ZFe0GTjvE",
    authDomain: "fb-clone-ee28a.firebaseapp.com",
    databaseURL: "https://fb-clone-ee28a.firebaseio.com",
    projectId: "fb-clone-ee28a",
    storageBucket: "fb-clone-ee28a.appspot.com",
    messagingSenderId: "810557492718",
    appId: "1:810557492718:web:2be3c878e37f1368c652ff"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;