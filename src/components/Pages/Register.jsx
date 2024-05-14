import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"

const Register = ()=>{
  const {createRegister} = useContext(AuthContext)
  const handleForm = (e)=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password)
        
        createRegister(email, password)
       
        
        .then(result=>{
          console.log(result.user)
          
          
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
                        font-semibold text-white">Simple  <span className="text-green-600">Registration</span> </h3>
                        <p className="text-[22px] font-bold text-white text-center ">
                        Please  Registration & <br /> Show My Portfolio </p>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="flex justify-center items-center">
        <form className="card-body" onSubmit={handleForm}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name :</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
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
          <button type="submit" className="btn btn-success text-white">Register Now</button>
        </div>
      </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;