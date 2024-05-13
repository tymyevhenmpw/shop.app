"use client"

import { useEffect, useState } from "react";
import { fetchUserByEmail } from "./actions/user.actions";
import { useSession } from "next-auth/react";

export async function currentUser(){
    const { data: session } = useSession();
    const [currentUserData, setCurrentUserData] = useState(null);
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (!session?.user?.email) return;

        const userEmail = session.user.email;

        setEmail(userEmail);

        const fetchUserData = async () => {
            try {
                const userData = await fetchUserByEmail(userEmail);
            } catch (error) {
                console.error(`Error fetching user data ${error}`);
            }
        };

        fetchUserData();
    }, [session]);

    if (!session?.user?.email || !currentUserData) return null;

    return currentUserData;
}