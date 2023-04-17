import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.init';

export const UserContext = createContext(null);
const auth = getAuth(app);

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}
const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const userInfo = {
        user,
        createUser,
        signInUser,
    }

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProviders;