import {motion} from "framer-motion";

export default function DisplayWhenScrolled({children}) {
    return(
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.1 }}
            style={{ width: "100%" }}
        >
            {children}
        </motion.div>
    )
}