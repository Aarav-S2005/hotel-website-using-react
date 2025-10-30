import {commonRoomFacilities, roomDetails} from "../util/constants.js";

export default function MobileRoomCards({onclick}) {
    return (
        <div className="min-h-screen p-4 bg-backg">
            <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center font-quintessential text-primary">
                    Our Luxury Villas And Suites
                </h1>

                <div className="flex flex-col gap-4">
                    {roomDetails.map((room, idx) => (
                        <MobileRoomCard key={idx} room={room} onClick={onclick} />
                    ))}
                </div>

                {/* Common Facilities */}
                <div
                    className="mt-6 rounded-xl p-4 border-2 bg-light border-secondary"
                >
                    <h2 className="text-2xl font-bold mb-3 font-quintessential text-primary">
                        {commonRoomFacilities.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {commonRoomFacilities.facilities.map((facility, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1.5 rounded-full text-xs font-medium font-lexend bg-tertiary text-primary"
                            >
                {facility}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function MobileRoomCard({ room, onClick }) {

    return (
        <div
            className="rounded-xl overflow-hidden shadow-lg bg-light"
        >
            <img
                src={room.path}
                alt={room.room_name}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h3
                    className="text-xl font-bold mb-2 font-quintessential text-primary"
                >
                    {room.room_name}
                </h3>

                <div
                    className="flex flex-col gap-1 text-sm mb-3 font-lexend text-primary"
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
                </div>

                <div className="mb-3">
                    <h4
                        className="font-semibold mb-2 text-sm font-lexend text-primary"
                    >
                        Features:
                    </h4>
                    <ul className="space-y-1">
                        {room.features.map((feature, idx) => (
                            <li
                                key={idx}
                                className="text-xs flex items-start font-lexend text-primary"
                            >
                                <svg className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#8FA31E' }}>
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-3 border-t" style={{ borderColor: '#C6D870' }}>
                    <div className="flex items-center justify-between mb-3">
                        <div>
              <span className="text-xl font-bold font-lexend text-primary">
                ₹{room.price.toLocaleString()}
              </span>
                <span className="text-xs ml-1" style={{
                    fontFamily: 'Lexend, sans-serif',
                    color: '#8FA31E'
                }}>
                /night
              </span>
                        </div>
                    </div>

                    <button
                        className="w-full py-2.5 rounded-lg font-semibold text-sm font-lexend bg-primary text-light active:scale-90"
                        onClick={() => onClick(room.room_name)}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}