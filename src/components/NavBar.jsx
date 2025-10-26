import Logo from "../assets/image/logo.png"
import {navBarComponents, underlineVariants} from "../util/constants.js";
import {Link} from "react-scroll"
import {Link as RouterLink} from "react-router-dom";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import ReserveButtons from "./ReserveButton.jsx";

export default function NavBar(){

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerHeight = window.innerHeight * 0.7;
            setIsScrolled(scrollY > triggerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <nav
            className={`fixed top-0 sm:top-5 z-[100] rounded-b-3xl sm:rounded-3xl bg-tertiary p-2 w-full md:w-[85%] sm:left-1/2 sm:-translate-x-1/2 flex items-center justify-between ${
                isScrolled ? "bg-tertiary/70" : "bg-tertiary"
            }`}
        >
            <div className={"flex items-center justify-center"}>
                <img src={Logo} alt="Logo" className={"w-[64px] h-[64px]"} />
                <h1 className={"text-4xl text-primary font-cookie"}>Mellora</h1>
            </div>

            <div className={"flex justify-center items-center font-quintessential gap-5 text-lg"}>
                <div className={"hidden sm:flex items-center justify-center gap-5"}>
                    {navBarComponents.map((component, index) => (
                        <motion.div
                            key={index}
                            className={"relative cursor-pointer"}
                            initial="initial"
                            whileHover="hover"
                        >
                            <Link
                                to={component.path}
                                smooth={true}
                                duration={500}
                                className={"px-2 py-2 text-black"}
                                offset={-100}
                            >
                                {component.name}
                            </Link>
                            <motion.span
                                variants={underlineVariants}
                                className={"absolute left-1/2 bottom-0 h-[2px] w-full -translate-x-1/2 bg-black origin-center"}
                            />
                        </motion.div>
                    ))}
                </div>

                <ReserveButtons />
            </div>
        </nav>
    )
}