import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase';


export const AuthContext=createContext();
const AuthProvider = ({children}) => { 

const [user,setUser]=useState();
// const [loading,setLoading]=useState(false);

const CreateUser=(email, password)=>{
     return createUserWithEmailAndPassword(auth, email, password);
}
const signInUser=(email,password)=>{
    // setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const signoutUser=()=>{
    return signOut(auth)
}
useEffect(()=>{
   const  unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser); 
   })
   return ()=>{
    unsubscribe();
   }
},[])
const authData={
    user,
    setUser,
    CreateUser,
    signInUser,
    signoutUser
    }
    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;