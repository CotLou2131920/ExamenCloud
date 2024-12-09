'use client';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import init from "../common/init";

export default function GetItems() {
    const [snapshot, setSnapshot] = useState([]);
    const { db, auth } = init();

   
    const userEmail = auth.currentUser?.email;

    useEffect(() => {
        const fetchData = async () => {
            try {
               
                if (userEmail) {
                    const q = query(
                        collection(db, "CollectionFilms"),
                        where("User", "==", userEmail) 
                    );
                    const querySnapshot = await getDocs(q);
                    console.log("Document data", querySnapshot.docs);
                    setSnapshot(querySnapshot.docs);
                } else {
                    console.log("Aucun utilisateur connecté");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        };

        fetchData();
    }, [db, userEmail]); 

    return (
        <div className="row">
            {snapshot.map((doc) => {
                const data = doc.data();
                return (
                    <div className="card col-lg-4 col-12" key={doc.id}>
                        <img
                            src={data.ImageUrl || "https://via.placeholder.com/300"}
                            className="card-img-top"
                            alt={data.Titre || "Movie Image"}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{data.Titre}</h5>
                            <p className="card-text">{data.Description || "No description available."}</p>
                            <a href="/" className="btn btn-primary">📖</a>
                            <a href="/" className="btn btn-dark">🗑️</a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
