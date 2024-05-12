import { useContext } from "react";
import Header from "./Header";
import { FaDownload } from "react-icons/fa6";
import { AuthContext } from "../../../Provider/AuthProvider";

const About = ()=>{
  const {user} = useContext(AuthContext)
    return(
        <div className="bg-[#09172e] h-[100%]">
            <Header user={user}></Header>
            <div  className="px-16 py-24 mb-10">
                <h2 className="font-bold text-5xl text-white
                 text-center mb-24">ABOUT <span className="text-green-500">ME</span> 
                 </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                     <div className="px-20">
                    <div className=" text-white space-y-6">
                         <h3 className="font-bold text-3xl">INFORMATION ABOUT ME</h3>
                          <p>I am a highly motivated, skilled and qualified Network Engineer
                             with over 10 years commercial experience working within various
                              private sector and public sector fast paced dynamic environments. 
                              My experience includes 
                            (but not limited to) Design, Security, Wireless, Project and BAU work. </p>
                            <div className="flex items-center text-white
                         
                     hover:bg-green-400 border-2 border-green-500
                        rounded-lg w-36 py-2 justify-center gap-4 bg-black">
                        <a href="../../../../src/assets/img1.jpg" 
                        className=""
                         download="filename">Download </a>
                         <FaDownload/> 
                        </div>  
                         </div>
                     </div>
                     <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 ">
                        <div className="border-2 border-green-300 text-center p-4 space-y-3
                         rounded-lg shadow-lg">
                            <h3 className="text-4xl text-green-600 font-bold">Front End</h3>
                            <p className="text-white">Lorem ispum dollar sit ament and
                             concentetur other side the last moments</p>
                        </div>
                         <div className="border-2 border-green-300 text-center p-4 space-y-3
                         rounded-lg shadow-lg">
                            <h3 className="text-4xl text-green-600 font-bold">Back End</h3>
                            <p className="text-white">Lorem ispum dollar sit ament and
                             concentetur other side the last moments</p>
                        </div>
                        <div className="border-2 border-green-300 text-center p-4 space-y-3
                         rounded-lg shadow-lg">
                            <h3 className="text-4xl text-green-600 font-bold">MS WORD</h3>
                            <p className="text-white">Lorem ispum dollar sit ament and
                             concentetur other side the last moments</p>
                        </div>
                        <div className="border-2 border-green-300 text-center p-4 space-y-3
                         rounded-lg shadow-lg">
                            <h3 className="text-4xl text-green-600 font-bold">Network</h3>
                            <p className="text-white">Lorem ispum dollar sit ament and
                             concentetur other side the last moments</p>
                        </div>
                     </div>

                </div>

            <div className="py-24">
            <h2 className="font-bold text-5xl text-white
                 text-center mb-24">MY SKILLS </h2>
                <div className="px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                    <div className="flex flex-col text-white mb-7">
                        <h3 className="font-bold mb-5 text-3xl">HTML</h3>
                      <div className="flex gap-4 ">
                      <span className="text-xl">95%</span> <input type="range" 
                      min={0} max="100" value="95" className="range range-success" />
                      </div>
                    </div>

                    <div className="flex flex-col text-white mb-7">
                        <h3 className="font-bold mb-5 text-2xl">CSS</h3>
                      <div className="flex gap-4">
                      <span className="text-xl">90%</span> <input type="range" 
                      min={0} max="100" value="90" className="range range-success" />
                      </div>
                    </div>

                    <div className="flex flex-col text-white mb-7">
                        <h3 className="font-bold mb-5 text-2xl">JS</h3>
                      <div className="flex gap-4">
                      <span className="text-xl">80%</span> <input type="range" 
                      min={0} max="100" value="80" className="range range-success" />
                      </div>
                    </div>

                    <div className="flex flex-col text-white mb-7">
                        <h3 className="font-bold mb-5 text-2xl">TAILWIND CSS</h3>
                      <div className="flex gap-4">
                      <span className="text-xl">90%</span> <input type="range" 
                      min={0} max="100" value="90" className="range range-success" />
                      </div>
                    </div>

                    <div className="flex flex-col text-white  mb-7">
                        <h3 className="font-bold mb-5 text-2xl">REACT JS</h3>
                      <div className="flex gap-4">
                      <span className="text-xl">85%</span> <input type="range" 
                      min={0} max="100" value="85" className="range range-success" />
                      </div>
                    </div>

                    <div className="flex flex-col text-white mb-7">
                        <h3 className="font-bold mb-5 text-2xl">EXPRESS JS</h3>
                      <div className="flex gap-4">
                      <span className="text-xl">90%</span> <input type="range" 
                      min={0} max="100" value="90" className="range range-success" />
                      </div>
                    </div>

                    <div className="flex flex-col text-white mb-7">
                        <h3 className="font-bold mb-5 text-2xl">MONGODB</h3>
                      <div className="flex gap-4">
                      <span className="text-xl">90%</span> <input type="range" 
                      min={0} max="100" value="90" className="range range-success" />
                      </div>
                    </div>
                    
                    </div>
                </div>
            </div>
            <div className="px-20 text-white">
                <h2 className="text-3xl font-bold text-center text-white mb-20">MY TIMELINE</h2>
                <ul className="steps steps-vertical">
                <li className="step step-success">Register</li>
                <li className="step step-success">Choose plan</li>
                <li className="step">Purchase</li>
                <li className="step">Receive Pro</li>
</ul>

            </div>
            </div>
          
            
                
        </div>
    
    )
}
export default About;