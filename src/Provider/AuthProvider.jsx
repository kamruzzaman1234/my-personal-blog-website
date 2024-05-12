import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true)
    
    const createRegister = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

   const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = ()=>{
    return signOut(auth)
   }

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log('Your update onAuth state changed', currentUser)
        setLoading(false)
        setUser(currentUser)
    })
    return ()=>{
        unsubscribe()
    }
   },[])
    const userInfo = {user, createRegister, signIn, logOut, loading}
    return(
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;