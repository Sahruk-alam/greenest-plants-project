import React, { createContext, useState } from 'react';


const AuthContext=createContext();
const AuthProvider = () => {
const [user,setUser]=useState();

const authData={

    }
    return <AuthContext value={authData}>

    </AuthContext>
};

export default AuthProvider;