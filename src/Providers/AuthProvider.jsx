import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import App from '../App';
import app from '../firebase/firbase.config';

export const AuthContext = createContext(null)
const auth = getAuth (app)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState('');
    const [loading,setLoading] = useState(true)
    
    const signUp = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        signOut(auth).then(()=>{

        }).catch(error=>{
            console.log(error.message)
        })
    }
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log('onAuthStateChanged',currentUser);
      })
            return ()=>{
                unSubscriber();
            }
    },[])
    const authInfo = {user,signUp,signIn,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;