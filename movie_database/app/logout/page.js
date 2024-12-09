'use client';
import React from "react";
import init from "../common/init";
import { useRouter } from 'next/navigation';
import { signOut } from "firebase/auth";

export default function Logout() {
    const { auth } = init();
    const route = useRouter();

    function LogOut(e) {
        e.preventDefault();

        signOut(auth)
            .then(() => {
                console.log("Logged out");
                route.push("/login");
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <button 
            onClick={LogOut} 
            className="btn btn-outline-light ms-3"
        >
            Logout
        </button>
    );
}
