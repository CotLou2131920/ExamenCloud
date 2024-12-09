'use client';
import init from "../common/init";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
export default function Login() {
    const {auth} = init();
    const route = useRouter();
    function submitFormSingIn(form) {
        form.preventDefault();

        const email = form.target.email.value;
        const password = form.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
            })
            .catch((error) => {
                console.log(error.message);
            })
        route.push("/")
    }

    return (
        <>
            
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <form 
                    onSubmit={submitFormSingIn} 
                    className="p-4 border rounded bg-white shadow-sm w-25"
                >
                    <h3 className="text-center mb-4">Login</h3>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter your email" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Enter your password" 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                    <a href="/signup" className="btn btn-link w-100">Signup</a>
                </form>
            </div>
        </>
    );
}
