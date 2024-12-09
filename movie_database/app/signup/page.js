'use client';
import React from "react";
import init from "../common/init";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';

export default function Signup() {

    const {auth} = init();
    const route = useRouter();

    function submitFormSingup(form) {
        form.preventDefault();

        const email = form.target.email.value;
        const password = form.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
            })
            .catch((error) => {
                console.log(error.message);
            })
        route.push("/")
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <form
                onSubmit={submitFormSingup}
                className="p-4 border rounded bg-white shadow-sm w-25"
            >
                <h3 className="text-center mb-4">Signup</h3>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                />
                </div>
                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        required
                    />
                    </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Signup
                </button>
                <a href="/login" className="btn btn-link w-100">Login</a>

            </form>
        </div>
    )
}