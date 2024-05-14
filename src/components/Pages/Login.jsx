import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = ()=>{
  const {signIn} = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

  const handleForm = (e)=>{
      e.preventDefault()
      const form = new FormData(e.currentTarget) 
      const email = form.get('email') 
      const password = form.get('password')
      console.log(email, password)
      signIn(email, password)
      .then(result=>{
        console.log(result.user)
        
        navigate(location?.state ? location.state:'/mainHome')
      })
      .catch(error=>{
        console.log(error)
      })
      

  }
    return(
        <div className="bg-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="bg-black py-16 rounded-lg">
                <div className="flex justify-center space-y-6 flex-col items-center ">
                    <h3 className="text-3xl underline
                    font-semibold text-white">Log  <span className="text-success">In Now</span> </h3>
                    <p className="text-[22px] text-white font-bold text-center ">
                    Please  Log In & <br /> Show My Portfolio </p>
                </div>
            </div>
            <div className="col-span-2">
                <div className="flex justify-center items-center">
                <form className="card-body" onSubmit={handleForm}>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-success text-white">Login</button>
    </div>
  </form>
  
        
                </div>
            </div>
        </div>
    </div>
    )
}
export default Login;