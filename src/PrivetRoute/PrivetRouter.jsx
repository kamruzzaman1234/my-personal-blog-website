import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({children})=>{
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname)

    if(loading){
        return <h2>Loading .......</h2>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
}
export default PrivetRouter