import Image404 from "../assets/image/Image404.png"
import {Link} from "react-router-dom";

export default function Page404() {
    return (
        <div className={"bg-light flex flex-col items-center justify-center overflow-hidden w-full min-h-screen"}>
            <img src={Image404}  alt={"404 image"} className={"w-640px] h-[640px]"}/>
            <Link to={"/"}>
                <button className={"p-4 rounded-xl bg-[#fffcf2]"} >Go To Home Page</button>
            </Link>
        </div>
    )
}