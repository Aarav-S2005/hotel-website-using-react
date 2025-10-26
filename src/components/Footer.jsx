import {footerContent, socials} from "../util/constants.js";

export default function Footer() {
    return (
        <footer className={"bg-backg flex flex-col items-center justify-center pt-10"}>
            <h1 className={"text-4xl text-primary font-cookie mb-10"}>Mellora</h1>
            <div className={"flex items-center justify-evenly w-full"}>
                {
                    footerContent.map((item) => (
                        <div className={"flex flex-col justify-start items-center"}>
                            <p className={"font-semibold font-quintessential mb-2"}>{item.header}</p>
                            {
                                item.list.map(l => (
                                    <p className={"font-lexend"}>{l}</p>
                                ))
                            }
                        </div>
                    ))
                }

            </div>

            <div className={"flex flex-col justify-center items-center mt-10"}>
                <p className={"font-semibold font-quintessential mb-2"}>Connect with us</p>
                <div className={"flex items-center justify-center gap-3"}>
                    {
                        socials.map((Icon, index) => (
                            <Icon key={index} className="w-6 h-6 text-gray-700 hover:text-green-600 transition-colors duration-300 cursor-pointer" />))
                    }
                </div>
            </div>

            <p className={"font-lexend mt-2 text-sm"}>
                Trademark Notice | Privacy Notice | Security Advisory | Terms of Use
            </p>
            <p className={"font-lexend text-sm mb-4"}>
                © 2025 Mellora. All Rights Reserved.
            </p>
        </footer>
    )
}