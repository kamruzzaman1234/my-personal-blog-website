import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainHome = ()=>{
    return(
        <div className="px-16 container mx-auto h-[100vh] bg-[#09172e]">
                <Header className=""></Header>
                <Outlet></Outlet>
        </div>
    )
}
export default MainHome;