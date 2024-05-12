import Header from "./Header";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Contact = ()=>{
    return(
        <div className="bg-[#09172e] h-[100%]">
        <Header></Header>
        <div className="px-16 py-32">
        <h2 className="font-bold text-5xl text-white
             text-center mb-12">CONTACT <span className="text-green-500">ME</span> 
            </h2>
            <p className="text-center mb-20 text-white text-xl ">The Page is Under Construction</p>
            <div className="px-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="">
                       <div className="text-white space-y-6 mb-4">
                            <h3 className="font-bold text-3xl">CONTACT ME HERE</h3>
                            <p className="text-[18px]">For Network consultancy services, <br /> please get in touch. </p>
                       </div>
                       <div className="flex items-center text-white text-2xl gap-6 mb-4"> 
                            <FaLocationDot/>
                            <p>Ashulia, Dhaka</p>
                       </div>
                       <div className="flex items-center text-white text-2xl gap-6 mb-4"> 
                            <MdMarkEmailRead/>
                            <p>kamruzzamancse22@gmail.com</p>
                       </div>
                       <div className="flex items-center text-white text-2xl gap-6 mb-4"> 
                            <MdContacts/>
                            <p>Contact No: 01935024654</p>
                       </div>
                       <div className="flex items-center text-white text-2xl gap-6 mb-4"> 
                            <MdLanguage/>
                            <p>Language: Bangla, English, China</p>
                       </div>
                       <div className="my-10 flex gap-6">
                          <a href=""><FaFacebook className="text-4xl text-white"/></a>
                          <a href=""><FaYoutube className="text-4xl text-white"/></a>
                          <a href=""><FaGithub className="text-4xl text-white"/></a>
                          <a href=""><FaLinkedin className="text-4xl text-white"/></a>
                          <a href=""><FaInstagramSquare className="text-4xl text-white"/></a>
                       </div>
                    </div>
                    <div>
                        <div>
                        <div className="max-w-md mx-auto">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Message
      </label>
      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message" rows="6"></textarea>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-green-500 hover:bg-green-700 
       text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
        Send Message
      </button>
    </div>
  </form>
</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    )
}
export default Contact;