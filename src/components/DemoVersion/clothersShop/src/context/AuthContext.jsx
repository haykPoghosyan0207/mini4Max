import React, { createContext, useState, useEffect } from "react";
import {getUserData} from "../Services/HttpServices/UserHttpServices.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadUser = async () => {
        const token = JSON.parse(localStorage.getItem("access_token"));
        if (token) {
            try {
                const data = await getUserData(token);
                setUser({
                    firstname: data.data.first_name,
                    lastname: data.data.last_name,
                    email: data.data.email,
                    phone: data.data.phone,
                });
            } catch (error) {
                console.error("Error loading user:", error);
                setUser(null);
            }
        }
        setLoading(false);
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loadUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
