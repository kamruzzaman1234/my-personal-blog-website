import { FaDownload } from "react-icons/fa6";
const Homes = ()=>{
    return(
        <div className="h-[100vh] bg-[#09172e] py-32">
            <div className="grid grid-col-2 lg:grid-cols-4 gap-16">
                <div className="bg-green-400 rounded-lg p-4">
                    <img src="../../../../src/assets/img1.jpg" alt="Image" 
                    className="w-[300px] h-[400px] shadow-lg mx-auto" />
                </div>
                <div className="lg:col-span-2">
                    <div className="space-y-6">
                        <h2 className="text-7xl mb-4 font-semibold text-white">Hi,
                         I am <span className="text-green-400">Kamruzzaman</span>. <br /> A Software Engineer. </h2>
                         <p className="text-white font-semibold">I am a Software. I love to build functional and resilient networks. Networks are digital roads for 
                        deploying applications like Twitter and google maps etc.. </p>
                        <div className="flex items-center text-white mt-10
                         
                     hover:bg-green-400 border-2 border-green-500
                        rounded-lg w-36 py-2 justify-center gap-4 bg-black">
                        <a href="../../../../src/assets/img1.jpg" 
                        className=""
                         download="filename">Download </a>
                         <FaDownload/> 
                        </div>

                    </div>
                </div>
            </div>
        </div> 

    )
}
export default Homes;