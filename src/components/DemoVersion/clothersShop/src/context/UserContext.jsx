
import React, { createContext, useState, useEffect } from 'react';
import { fetchUserData } from './services';

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Եթե token կա, բեռնիր user data
        const token = localStorage.getItem('access_token');
        if(token){
            fetchUserData(setUser);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
