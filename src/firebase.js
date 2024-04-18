import { initializeApp } from "firebase/app";
import {
// GoogleAuthProvider,
// signInWithPopup,
getAuth,
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
sendPasswordResetEmail,
signOut,
} from "firebase/auth";
import {
// query,
// getDocs,
// where,
getFirestore,
collection,
addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCs7ttlmxoUZ2zLm6tKeffPIw8m1UveGuM",
    authDomain: "careorgwebapp.firebaseapp.com",
    projectId: "careorgwebapp",
    storageBucket: "careorgwebapp.appspot.com",
    messagingSenderId: "584389440877",
    appId: "1:584389440877:web:c7f5563112555cbc701664",
    measurementId: "G-56MSPL1QEE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
// try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//     await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//     });
//     }
// } catch (err) {
//     console.error(err);
//     alert(err.message);
// }
// };
const logInWithEmailAndPassword = async (email, password) => {
try {
    await signInWithEmailAndPassword(auth, email, password);
} catch (err) {
    console.error(err);
    alert(err.message);
}
};
const registerWithEmailAndPassword = async (name, email, password) => {
try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
    uid: user.uid,
    name,
    authProvider: "local",
    email,
    });
} catch (err) {
    console.error(err);
    alert(err.message);
}
};
// const sendPasswordReset = async (email) => {
// try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
// } catch (err) {
//     console.error(err);
//     alert(err.message);
// }
// };
const logout = () => {
signOut(auth);
};
export {
auth,
db,
logInWithEmailAndPassword,
registerWithEmailAndPassword,
sendPasswordResetEmail,
logout,
};
export default firebaseConfig;