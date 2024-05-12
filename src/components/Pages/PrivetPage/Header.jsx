import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { CiHome } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import { FaBlogger } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";

const Header = ()=>{
    const {user, logOut} = useContext(AuthContext);
    const logOutHandle = ()=>{
        logOut()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return(
     <div className="fixed px-16 mt-40 right-0">
     <div className="navbar  flex-col flex justify-center items-center">
  <div className="flex-1 ">
  </div>
  <div className="">
    <ul className="menu menu-horizontal px-1 flex-col space-y-5">
      <Link to="/mainHome" className="p-3 mx-auto bg-white rounded-full">
        <CiHome className="text-3xl mx-auto text-center text-green-900 font-bold"/></Link>
        <Link to="/about" className="p-3 mx-auto bg-white rounded-full">
        <GrUserManager className="text-3xl mx-auto text-center text-green-900  font-bold"/></Link>
        <Link to="/portfolio" className="p-3 mx-auto bg-white rounded-full">
        <FiShoppingBag className="text-3xl mx-auto text-center text-green-900  font-bold"/></Link>
        <Link to="/blog" className="p-3 mx-auto bg-white rounded-full">
        <FaBlogger className="text-3xl mx-auto text-center text-green-900  font-bold"/></Link>

        <Link to="/contact" className="p-3 mx-auto bg-white rounded-full">
        <TiMessages className="text-3xl mx-auto text-center text-green-900  font-bold"/></Link>
        <ul className="space-y-4 bg-base-100 text-center rounded-lg text-white ml-5">
           
            {
                user ? <button className="btn btn-block bg-green-400 rounded-lg text-white font-bold"
                 onClick={logOutHandle}>Sign Out</button> : 
                 <button className="rounded-lg">
                  <Link to="/login">Log In</Link> </button>
            }
          </ul>
     
     
    </ul>
  </div>
</div>
        </div>
    )
}
export default Header;