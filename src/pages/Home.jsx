import NavBar from "../components/NavBar.jsx";
import HotelMainImage from "../assets/image/Image5.jpg"
import {homeCardsContent} from "../util/constants.js";
import Footer from "../components/Footer.jsx";
import {useEffect, useState} from "react";
import {ArrowBigUp} from "lucide-react";
import Dining from "../components/Dining.jsx";
import DisplayWhenScrolled from "../components/DisplayWhenScrolled.jsx";
import Amenities from "../components/Amenities.jsx";
import Logo from "../assets/image/logo.png";
import VillasAndSuites from "../components/VillasAndSuites.jsx";

export default function Home(){

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect( () => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div className={"relative bg-backg min-h-screen"} id={"home"}>
            <button className={`${isScrolled ? "fixed bg-light p-2 rounded-2xl cursor-pointer right-3 bottom-3" : "hidden"}`}>
                <ArrowBigUp className={"w-6 h-6"} />
            </button>
            <NavBar/>
            <div className={"flex flex-col justify-center items-center pb-10"}>
                <img src={HotelMainImage} alt="hotel" className="w-full h-[70vh] object-cover bg-no-repeat"/>
                <div className={"flex flex-col items-center relative justify-center py-10 px-12 bg-light mt-10 rounded-full"}>
                    <img src={Logo} alt="Logo" className={"w-[96px] h-[96px] absolute top-2 opacity-20"} />
                    <h2 className={"font-cookie text-5xl text-primary"}>Mellora</h2>
                    <p className={"font-lexend text-black text-center"}>
                        Welcome to Mellora — where luxury meets nature’s serenity.<br />
                        Nestled in tranquil surroundings, Mellora offers an oasis of calm designed to rejuvenate your mind and soul.<br/>
                        Experience refined comfort, elegant design, and the soothing embrace of nature — all in one perfect retreat.<br/>
                    </p>
                </div>
                <div className="mt-10 flex flex-col gap-20 items-center">
                    {homeCardsContent.map((item, index) => (
                        <div
                            key={index}
                            className={`flex justify-center items-center w-full gap-20 ${
                                item.align === "right" ? "flex-row-reverse" : "flex-row"
                            }`}
                        >
                            <div className="w-[35%] aspect-square overflow-hidden">
                                <img
                                    src={item.path}
                                    alt={item.heading}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-[35%] aspect-square flex flex-col bg-light text-center p-6">
                                <h2 className="text-2xl mb-15 font-quintessential font-semibold">{item.heading}</h2>
                                <p className={`text-gray-700 font-lexend text-sm leading-relaxed ${item.align !== "left" ? "text-left" : "text-right"}`}>
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <DisplayWhenScrolled children={<VillasAndSuites />} />
            <DisplayWhenScrolled children={<Dining />} />
            <DisplayWhenScrolled children={<Amenities />} />
            <DisplayWhenScrolled children={<Footer />} />
        </div>
    )
}