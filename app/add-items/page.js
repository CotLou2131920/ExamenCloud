'use client';
import init from "../common/init";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from 'next/navigation';

export default function AddItems() {
    const route = useRouter();
    const {db, auth } = init();
    const user = auth.currentUser;
 
    async function add(film) {
        film.preventDefault();
        const user = auth.currentUser;
        console.log(user.email)
        console.log("Nom du film :", film.target.name.value);

        try {
            const docRef = await addDoc(collection(db, "CollectionFilms"), {
                Titre: film.target.name.value,
                User: user.email, 
                Description: film.target.description.value
            });
            console.log("Document ajouté avec l'ID :", docRef.id);
        } catch (err) {
            console.error("Erreur lors de l'ajout du document :", err);
        }

        route.push("/")
        
    }



        return (
            <div className="container mt-5">
    <h1 className="text-center mb-4">Add a Movie</h1>
    <form onSubmit={add} className="d-flex flex-column align-items-center">
        <div className="mb-3 w-50">
            <label htmlFor="movieName" className="form-label">Movie Name</label>
            <input
                type="text"
                name="name"
                id="movieName"
                className="form-control"
                placeholder="Enter movie name"
                required
            />
        </div>
        <div className="mb-3 w-50">
            <label htmlFor="movieDescription" className="form-label">Description</label>
            <textarea
                name="description"
                id="movieDescription"
                className="form-control"
                placeholder="Enter movie description"
                rows="4"
                required
            ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-50">
            Add Movie
        </button>
    </form>
</div>

        );
        
    
}
