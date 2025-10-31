import { footerContent, socials } from "../util/constants.js";
import Title from "./Title.jsx";

export default function Footer() {
    return (
        <footer className="bg-backg flex flex-col items-center justify-center pt-10 px-4">
            <Title text="Mellora" />
            <div className="flex flex-col md:flex-row items-center justify-evenly w-full mt-6 gap-8 md:gap-0">
                {footerContent.map((item, idx) => (
                    <div key={idx} className="flex flex-col justify-start items-center text-center space-y-2">
                        <p className="font-semibold font-quintessential mb-1">{item.header}</p>
                        {item.list.map((l, i) => (
                            <p
                                key={i}
                                className="font-lexend hover:text-green-600 transition-colors duration-300 cursor-pointer text-sm md:text-base"
                            >
                                {l}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
                <p className="font-semibold font-quintessential mb-2">Connect with us</p>
                <div className="flex items-center justify-center gap-4">
                    {socials.map((Icon, index) => (
                        <Icon
                            key={index}
                            className="w-6 h-6 text-gray-700 hover:text-green-600 transition-colors duration-300 cursor-pointer"
                        />
                    ))}
                </div>
            </div>

            {/* Footer bottom text */}
            <p className="font-lexend mt-4 text-xs md:text-sm text-center px-3">
                Trademark Notice | Privacy Notice | Security Advisory | Terms of Use
            </p>
            <p className="font-lexend text-xs md:text-sm mb-4">
                © 2025 Mellora. All Rights Reserved.
            </p>
        </footer>
    );
}
