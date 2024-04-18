import "../css/Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard() {
const [user, loading, error] = useAuthState(auth);
const [name, setName] = useState("");
const [mail, setMail] =useState("");
const navigate = useNavigate();
const fetchUserName = async () => {
    const uid = user && user.uid;
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    setMail(data.name.mail)
    setName(data.name);
};
useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
}, [user, loading]);

return (
    <div className="dashboard">
        <div className="dashboard__container">
            Ingresado como
            <div>{name}</div>
            <div>{mail}</div>
            <button className="dashboard__btn" onClick={logout}>
            Salir
            </button>
        </div>
    </div>
);
}
export default Dashboard;
