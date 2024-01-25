"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from "react-hot-toast";
import Loading from '../loading/loading';


const RegisterPage = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    const register = async () => {
        if (userData.name === "" || userData.email === "" || userData.password === "") {

            toast.error("Please fill all required fields");
            return
        }

        if (userData.password !== userData.passwordConfirm) {
            toast.error("Passwords do not match.");
            return
        }
        setLoading(true);
        await axios.post('https://awesomeres.onrender.com/api/v1/users/signup', userData).then((response) => {
            if (response.status == 201) {
                toast.success("User Resistered Successfully");
            } else {
                toast.error("User Resistered Failed");
            }
        }).finally(() => {
            setLoading(false);
            setUserData({
                name: "",
                email: "",
                password: "",
                passwordConfirm: "",

            });
        });
    }

    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />

            <div className="flex items-center justify-center h-screen">

                <form className="bg-white p-8 shadow-md rounded-md" onSubmit={async (e) => {
                    e.preventDefault();
                    await register();
                }}>

                    <h1 className='text-black text-center text-2xl mb-5'>Register</h1>


                    <label htmlFor="username" className="block text-gray-700 mb-2 ">Username</label>
                    <input type="text" onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        value={userData.name} id="username" className="w-full border text-gray-700 border-gray-300 p-2 mb-4 rounded" />

                    <label htmlFor="email" className="block text-gray-700 mb-2 ">Email</label>
                    <input type="email" onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        value={userData.email} id="email" className="w-full border text-gray-700 border-gray-300 p-2 mb-4 rounded" />

                    <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                    <input type="password" onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        value={userData.password} id="password" className="w-full border text-gray-700 border-gray-300 p-2 mb-4 rounded" />

                    <label htmlFor="passwordConfirm" className="block text-gray-700 mb-2">Confirm Your Password</label>
                    <input type="password" onChange={(e) => setUserData({ ...userData, passwordConfirm: e.target.value })}
                        value={userData.passwordConfirm} id="passwordConfirm" className="w-full border text-gray-700 border-gray-300 p-2 mb-4 rounded" />

                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full" disabled={loading}>
                        {loading ? <div className='text-center'><Loading /></div> : "Register"}
                    </button>
                </form>
            </div>
        </div>


    )
}

export default RegisterPage