import Heading from "./Heading.jsx";
import {AnimatePresence, motion} from "framer-motion";
import {amenities} from "../util/constants.js";
import {useState} from "react";

export default function Amenities() {
    const [selectedAmenity, setSelectedAmenity] = useState(null);

    return (
        <section
            id="amenities"
            className="relative flex flex-col justify-center items-center bg-light py-24 px-4 overflow-hidden"
        >
            <Heading title="Amenities" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
                {amenities.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.id}
                            className="bg-backg rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                        >
                            <div className="w-16 h-16 flex items-center justify-center bg-light rounded-full mb-4">
                                <Icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-quintessential font-semibold text-primary mb-2">{item.title}</h3>
                            <p className="text-gray-800 font-lexend text-sm leading-relaxed">{item.text}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}