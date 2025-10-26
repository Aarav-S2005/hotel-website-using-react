import {useState} from "react";
import {motion} from "framer-motion";

export default function LazyImage({ src, alt, align }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative w-full h-80">
            {!loaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
            )}

            <motion.img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                whileHover={{rotate: align === "left" ? -5 : 5, scale: 1.05}}
            />
        </div>
    );
}