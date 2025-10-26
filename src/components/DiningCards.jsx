import {diningCardComponents} from "../util/constants.js";
import LazyImage from "./LazyImage.jsx";
import {motion} from "framer-motion";

export default function DiningCards() {

    return (
        <div className="flex flex-col items-center space-y-16 py-12">
            {diningCardComponents.map((item, index) => (
                <motion.div
                    key={index}
                    className={`flex flex-col md:flex-row ${ item.align === "right" ? "md:flex-row-reverse" : "" } items-center max-w-5xl w-full px-6`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="md:w-1/2 w-full relative">
                        <LazyImage src={item.path} alt={item.restaurant_name} align={item.align} />
                    </div>

                    <motion.div
                        className={`md:w-1/2 w-full mt-6 md:mt-0 ${
                            item.align === "right" ? "md:pr-10" : "md:pl-10"
                        }`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            {item.restaurant_name}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );

    // return (
    //     <div className="flex flex-col items-center space-y-16 py-12">
    //         {diningCardComponents.map((item, index) => (
    //             <div
    //                 key={index}
    //                 className={`flex flex-col md:flex-row ${
    //                     item.align === "right" ? "md:flex-row-reverse" : ""
    //                 } items-center max-w-5xl w-full px-6`}
    //             >
    //                 <div className="md:w-1/2 w-full">
    //                     <img
    //                         src={item.path}
    //                         alt={item.restaurant_name}
    //                         loading={"lazy"}
    //                         className="w-full h-80 object-cover rounded-lg shadow-lg"
    //                     />
    //                 </div>
    //                 <div
    //                     className={`md:w-1/2 w-full mt-6 md:mt-0 ${
    //                         item.align === "right" ? "md:pr-10" : "md:pl-10"
    //                     }`}
    //                 >
    //                     <h2 className="text-2xl font-semibold text-gray-800 mb-3">
    //                         {item.restaurant_name}
    //                     </h2>
    //                     <p className="text-gray-600 leading-relaxed">{item.description}</p>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // );
}
