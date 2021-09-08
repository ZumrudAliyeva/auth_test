import firebase from "firebase/compat/app"
import "firebase/compat/auth"
const app = firebase.initializeApp({
    apiKey: "AIzaSyCnafkR2a4P2hZKFuHGkeohavaaYh3WGRg",
    authDomain: "auth-test-65d23.firebaseapp.com",
    projectId: "auth-test-65d23",
    storageBucket: "auth-test-65d23.appspot.com",
    messagingSenderId: "693627992227",
    appId: "1:693627992227:web:32a751702712499850a716",
    measurementId: "G-VHF6S9TLGG"
})

export const auth = app.auth();
export default app;