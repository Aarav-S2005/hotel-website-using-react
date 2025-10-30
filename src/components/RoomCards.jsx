import {useState} from "react";
import {commonRoomFacilities, roomDetails} from "../util/constants.js";
import {motion, AnimatePresence} from "framer-motion";

export default function RoomCards({onClick}) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleCardClick = (idx) => {
        setExpandedIndex(expandedIndex === idx ? null : idx);
    };

    return (
        <div className="min-h-screen p-8" style={{ backgroundColor: '#c8deab' }}>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold mb-12 text-center font-quintessential text-primary">
                    Our Luxury Villas And Suites
                </h1>

                <div className="flex flex-col gap-4">
                    <motion.div
                        className="flex gap-4"
                        layout
                    >
                        {roomDetails.map((room, idx) => (
                            <motion.div
                                key={idx}
                                layout
                                className={`${
                                    expandedIndex === null || expandedIndex === idx
                                        ? 'flex-1'
                                        : 'hidden'
                                }`}
                                onClick={() => handleCardClick(idx)}
                            >
                                <RoomCard room={room} isExpanded={expandedIndex === idx} onClick={onClick} />
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="flex gap-4"
                        layout
                    >
                        <AnimatePresence>
                            {expandedIndex !== null && roomDetails.map((room, idx) => (
                                idx !== expandedIndex && (
                                    <motion.div
                                        key={idx}
                                        layout
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="flex-1"
                                        onClick={() => handleCardClick(idx)}
                                    >
                                        <RoomCard room={room} isExpanded={false} onClick={onClick}/>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                <motion.div
                    layout
                    className="mt-12 rounded-xl p-6 border-2 bg-light border-secondary"
                >
                    <h2 className="text-3xl font-bold mb-4 font-quintessential text-primary">
                        {commonRoomFacilities.title}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {commonRoomFacilities.facilities.map((facility, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 rounded-full text-sm font-medium font-lexend text-primary bg-tertiary"
                            >
                {facility}
              </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function RoomCard({ room, isExpanded, onClick }) {
    return (
        <motion.div
            layout
            className="rounded-xl overflow-hidden shadow-lg cursor-pointer h-full bg-light"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <motion.img
                layout
                src={room.path}
                alt={room.room_name}
                className={`w-full object-cover ${isExpanded ? 'h-64' : 'h-48'}`}
            />

            <motion.div layout className="p-6">
                <motion.h3
                    layout
                    className="text-2xl font-bold mb-2 text-primary font-quintessential"
                >
                    {room.room_name}
                </motion.h3>

                <motion.div
                    layout
                    className="flex items-center gap-4 text-sm mb-4 font-lexend text-primary"
                >
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
              {room.no_of_people}
          </span>
                    <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
                        {room.size_sq_ft} sq ft
          </span>
                </motion.div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mb-4">
                                <h4
                                    className="font-semibold mb-2 font-lexend text-primary"
                                >
                                    Features:
                                </h4>
                                <ul className="space-y-1">
                                    {room.features.map((feature, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="text-sm flex items-start font-lexend text-primary"
                                        >
                                            <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#8FA31E' }}>
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div layout className={`${isExpanded ? 'flex items-center justify-between' : ''} pt-4 border-t`} style={{ borderColor: '#C6D870' }}>
                    <div>
            <span className="text-2xl font-bold font-lexend text-primary">
              ₹{room.price.toLocaleString()}
            </span>
                        <span className="text-sm ml-1 font-lexend text-secondary">
              /night
            </span>
                    </div>
                    {isExpanded && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="px-6 py-2 rounded-lg font-semibold transition-all font-lexend bg-primary text-light"
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#8FA31E'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#556B2F'}
                            onClick={() => onClick(room.room_name)}
                        >
                            Book Now
                        </motion.button>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}