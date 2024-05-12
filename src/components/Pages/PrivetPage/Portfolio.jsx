import Header from "./Header";
import { FaGithub } from "react-icons/fa";

const Portfolio = ()=>{
    return(
        <div className="bg-[#09172e] h-[100%]">
            <Header></Header>
            <div className="px-16 py-32">
            <h2 className="font-bold text-5xl text-white
                 text-center mb-12">MY <span className="text-green-500">PORTFOLIO</span> 
                </h2>
                <p className="text-center mb-20 text-white text-xl ">The Page is Under Construction</p>
                <div className="px-32">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div className=" text-white relative">
                        <div>
                           <img src="../../../../src/assets/1.jpg" alt=""  className="rounded-lg h-[300px]"/>
                        </div>
                        <div className="absolute top-0 right-0 w-[100%] h-[100%] hover:visible
                         hover:bg-green-400 flex  rounded-lg justify-center items-center opacity-0.4 transition-opacity">
                            <div className="flex gap-3">
                            <a href="" className="text-2xl font bold text-white"><FaGithub/></a>
                            <a href="" className="text-2xl font bold text-white"><FaGithub/></a>
                            <a href="" className="text-2xl font bold text-white"><FaGithub/></a>
                            </div>
                        </div>
                    </div>
                    <div className=" text-white relative">
                        <div>
                           <img src="../../../../src/assets/2.jpg" alt=""  className="rounded-lg h-[300px]"/>
                        </div>
                        <div className="absolute top-0 right-0 w-[100%] h-[100%] hover:visible
                         hover:bg-green-400 flex  rounded-lg justify-center items-center opacity-0.4 transition-opacity">
                            <div className="flex gap-3">
                            <a href="" className="text-2xl font bold text-white"><FaGithub/></a>
                            <a href="" className="text-2xl font bold text-white"><FaGithub/></a>
                            <a href="" className="text-2xl font bold text-white"><FaGithub/></a>
                            </div>
                        </div>
                    </div>

                    <div className=" text-white relative">
                        <div>
                           <img src="../../../../src/assets/3.jpg" alt=""  className="rounded-lg h-[300px]"/>
                        </div>
                        <div className="absolute top-0 right-0 w-[100%] h-[100%] hover:visible
                         hover:bg-green-400 flex  rounded-lg justify-center items-center opacity-0.4 transition-opacity">
                            <div className="flex gap-3">
                            <a href="" className="text-2xl font bold text-white"><FaGithub/></a>
                            <a href="" className="text-2xl font bold text-white"><FaGithub/></a>
                            <a href="" className="text-2xl font bold text-white"><FaGithub/></a>
                            </div>
                        </div>
                    </div>

                    <div className=" text-white relative">
                        <div>
                           <img src="../../../../src/assets/4.jpg" alt=""  className="rounded-lg h-[300px]"/>
                        </div>
                        <div className="absolute top-0 right-0 w-[100%] h-[100%] hover:visible
                         hover:bg-green-400 flex  rounded-lg justify-center items-center opacity-0.4 transition-opacity">
                            <div className="flex gap-3">
                            <a href="" className="text-2xl font bold text-white"><FaGithub/></a>
                            <a href="" className="text-2xl font bold text-white"><FaGithub/></a>
                            <a href="" className="text-2xl font bold text-white"><FaGithub/></a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div> 

    )
}
export default Portfolio;