"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";
import GoogleSignIn from "@/components/authButtons/GoogleSignIn";


export default function SignupPage() {
    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })

    const [err, setErr] = useState('');
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const onSignup = async () => {
        try {
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            throw new Error(`Error creating user ${error.message}`)
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
        <>
            <div className="flex flex-col items-center justify-center  py-2 pt-52 ">
                
                <div className="flex flex-col items-center justify-center bg-white py-5 px-8 rounded-lg shadow-2xl">
                    <div className="mb-5 text-[20px]"><Link href='/signup' className="mr-1 text-slate-500">Реєстрація</Link>/<Link href='login' className="ml-1 relative before:content-[''] before:absolute before:h-[3px] hover:before:w-full before:bottom-[-5px] before:w-0 before:bg-black before:transition-all duration-1000 before:rounded-sm before:left-0">Вхід</Link></div>
                    <hr />
                        <GoogleSignIn/>
                        <br />
                    <hr />
                    <label htmlFor="username">Ім'я</label>
                    <input 
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="username"
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({...user, username: e.target.value})}
                        placeholder="Name"
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="email"
                        type="text"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        placeholder="Email"
                    />
                    <label htmlFor="password">Пароль</label>
                    <input 
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="password"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        placeholder="Password"
                    />
                        {buttonDisabled? <button
                        className="p-2 border bg-gray-50 border-gray-300 text-gray-300 rounded-lg mb-4 pointer-events-none ">Створити акаунт</button>:
                        <button
                        onClick={onSignup}
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none    hover:border-slate-950 transition-colors duration-300">Створити акаунт</button>}
                        {err?
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                        {err}
                        </div>
                        :<></>}
                    </div>
                    
         
                </div>
        </>
    )

}