import Header from "./Header"
const Blog = ()=>{
    return(
        <div className="bg-[#09172e] h-[100%]">
        <Header></Header>
        <div className="px-16 py-32">
        <h2 className="font-bold text-5xl text-white
             text-center mb-12">MY <span className="text-green-500">BLOG</span> 
            </h2>
            <p className="text-center mb-20 text-white text-xl ">The Page is Under Construction</p>
            <div className="px-32">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className=" text-white shadow-lg p-3">
                    <div>
                       <img src="../../../../src/assets/1.jpg" alt=""  className=" h-[230px]"/>
                    </div>
                    <div className="p-4 bg-slate-600 space-y-4 hover:border-t-8 hover:border-green-500">
                       <h2 className="font-bold text-xl">How to Create Your Owm Website</h2>
                       <p>Lorem ispum dollar sit amet and 
                        conceptetur and other side of the of the project</p>
                    </div>
                </div>
                <div className=" text-white shadow-lg p-3">
                    <div>
                       <img src="../../../../src/assets/2.jpg" alt=""  className=" h-[230px]"/>
                    </div>
                    <div className="p-4 bg-slate-600 space-y-4 hover:border-t-8 hover:border-green-500">
                       <h2 className="font-bold text-xl">How to Create Your Owm Website</h2>
                       <p>Lorem ispum dollar sit amet and 
                        conceptetur and other side of the of the project</p>
                    </div>
                </div>

                <div className=" text-white shadow-lg p-3">
                    <div>
                       <img src="../../../../src/assets/3.jpg" alt=""  className=" h-[230px]"/>
                    </div>
                    <div className="p-4 bg-slate-600 space-y-4 hover:border-t-8 hover:border-green-500">
                       <h2 className="font-bold text-xl">How to Create Your Owm Website</h2>
                       <p>Lorem ispum dollar sit amet and 
                        conceptetur and other side of the of the project</p>
                    </div>
                </div>

                <div className=" text-white shadow-lg p-3">
                    <div>
                       <img src="../../../../src/assets/4.jpg" alt=""  className=" h-[230px]"/>
                    </div>
                    <div className="p-4 bg-slate-600 space-y-4 hover:border-t-8 hover:border-green-500">
                       <h2 className="font-bold text-xl">How to Create Your Owm Website</h2>
                       <p>Lorem ispum dollar sit amet and 
                        conceptetur and other side of the of the project</p>
                    </div>
                </div>
               
            </div>
            </div>
        </div>
    </div> 
    )
}
export default Blog