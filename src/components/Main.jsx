import { Outlet } from "react-router-dom";
import Headers from "./Headers";
const Main = ()=>{
    return(
        <div className="px-16 container mx-auto">
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    )
}
export default Main;