import firebase from 'firebase';
console.log(firebase)
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAbxneZdumPSCw5SXrPLjfLhwC-kPRPvF0",
    authDomain: "buyapp-9f5c5.firebaseapp.com",
    databaseURL: "https://buyapp-9f5c5-default-rtdb.firebaseio.com",
    projectId: "buyapp-9f5c5",
    storageBucket: "buyapp-9f5c5.appspot.com",
    messagingSenderId: "925511380622",
    appId: "1:925511380622:web:aca37843f9699420c523df"
};

//firebase.initializeApp(firebaseConfig);

var app = firebase.initializeApp(firebaseConfig);

export { firebase };
