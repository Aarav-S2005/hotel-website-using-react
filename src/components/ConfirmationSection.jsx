import {useState} from "react";
import ReserveButtons from "./ReserveButton.jsx";
import {Link} from "react-router-dom";

export default function ConfirmationSection({data}) {

    const [guestData] = useState(data);

    const roomPrices = {
        "Forest Pool Villa": 36000,
        "Garden Serenity Suite": 38000,
        "Lakeside Luxe Villa": 56000,
    };

    const checkIn = new Date(guestData.checkInDate);
    const checkOut = new Date(guestData.checkOutDate);
    const diffTime = Math.abs(checkOut - checkIn);
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const roomPrice = roomPrices[guestData.roomType];
    const subtotal = roomPrice * nights;
    const tax = subtotal * 0.18;
    const totalPrice = subtotal + tax;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if(!guestData){
        return (
            <div className={"min-h-screen bg-backg p-6"}>
                <div className="w-full max-w-2xl bg-light animate-pulse shadow-xl rounded-xl ">
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen p-4 flex items-center justify-center" style={{ backgroundColor: '#c8deab' }}>
            <div className="w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden" style={{ backgroundColor: '#EFF5D2' }}>
                <div className="p-6 border-b-2" style={{
                    backgroundColor: '#556B2F',
                    borderColor: '#8FA31E'
                }}>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold" style={{
                                fontFamily: 'Quintessential, cursive',
                                color: '#EFF5D2'
                            }}>
                                Confirm Booking
                            </h1>
                        </div>
                        <svg className="w-16 h-16" style={{ color: '#C6D870' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="p-6">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-4" style={{
                            fontFamily: 'Quintessential, cursive',
                            color: '#556B2F'
                        }}>
                            Guest Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs font-semibold mb-1" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#8FA31E'
                                }}>
                                    Full Name
                                </p>
                                <p className="text-base font-medium" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#556B2F'
                                }}>
                                    {guestData.name}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold mb-1" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#8FA31E'
                                }}>
                                    Email Address
                                </p>
                                <p className="text-base font-medium" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#556B2F'
                                }}>
                                    {guestData.email}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-4" style={{
                            fontFamily: 'Quintessential, cursive',
                            color: '#556B2F'
                        }}>
                            Reservation Details
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs font-semibold mb-1" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#8FA31E'
                                }}>
                                    Check-in Date
                                </p>
                                <p className="text-base font-medium" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#556B2F'
                                }}>
                                    {formatDate(guestData.checkInDate)}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold mb-1" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#8FA31E'
                                }}>
                                    Check-out Date
                                </p>
                                <p className="text-base font-medium" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#556B2F'
                                }}>
                                    {formatDate(guestData.checkOutDate)}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold mb-1" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#8FA31E'
                                }}>
                                    Number of Nights
                                </p>
                                <p className="text-base font-medium" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#556B2F'
                                }}>
                                    {nights} {nights === 1 ? 'Night' : 'Nights'}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold mb-1" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#8FA31E'
                                }}>
                                    Guests
                                </p>
                                <p className="text-base font-medium" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#556B2F'
                                }}>
                                    {guestData.adults} {guestData.adults === 1 ? 'Adult' : 'Adults'}, {guestData.children} {guestData.children === 1 ? 'Child' : 'Children'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-4" style={{
                            fontFamily: 'Quintessential, cursive',
                            color: '#556B2F'
                        }}>
                            Room Details
                        </h2>
                        <div className="p-4 rounded-lg" style={{ backgroundColor: '#C6D870' }}>
                            <p className="text-xl font-bold mb-1" style={{
                                fontFamily: 'Quintessential, cursive',
                                color: '#556B2F'
                            }}>
                                {guestData.roomType}
                            </p>
                            <p className="text-sm" style={{
                                fontFamily: 'Lexend, sans-serif',
                                color: '#556B2F'
                            }}>
                                ₹{roomPrice.toLocaleString()} per night
                            </p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-4" style={{
                            fontFamily: 'Quintessential, cursive',
                            color: '#556B2F'
                        }}>
                            Payment Information
                        </h2>
                        <div>
                            <p className="text-xs font-semibold mb-1" style={{
                                fontFamily: 'Lexend, sans-serif',
                                color: '#8FA31E'
                            }}>
                                Payment Method
                            </p>
                            <p className="text-base font-medium" style={{
                                fontFamily: 'Lexend, sans-serif',
                                color: '#556B2F'
                            }}>
                                {guestData.paymentMethod}
                            </p>
                        </div>
                    </div>
                    <div className="border-t-2 pt-4" style={{ borderColor: '#C6D870' }}>
                        <h2 className="text-2xl font-bold mb-4" style={{
                            fontFamily: 'Quintessential, cursive',
                            color: '#556B2F'
                        }}>
                            Price Breakdown
                        </h2>
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between items-center">
                                <p className="text-sm" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#556B2F'
                                }}>
                                    Room Rate ({nights} {nights === 1 ? 'night' : 'nights'})
                                </p>
                                <p className="text-sm font-medium" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#556B2F'
                                }}>
                                    ₹{subtotal.toLocaleString()}
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-sm" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#556B2F'
                                }}>
                                    Tax (18%)
                                </p>
                                <p className="text-sm font-medium" style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    color: '#556B2F'
                                }}>
                                    ₹{tax.toLocaleString()}
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center p-4 rounded-lg" style={{ backgroundColor: '#556B2F' }}>
                            <p className="text-lg font-bold" style={{
                                fontFamily: 'Lexend, sans-serif',
                                color: '#EFF5D2'
                            }}>
                                Total Amount
                            </p>
                            <p className="text-2xl font-bold" style={{
                                fontFamily: 'Lexend, sans-serif',
                                color: '#C6D870'
                            }}>
                                ₹{totalPrice.toLocaleString()}
                            </p>
                        </div>
                    </div>
                    <Link to={"/"}>
                        <button className={"font-lexend text-primary mt-4 p-3 px-5 bg-backg rounded-2xl transform hover:scale-110 hover:bg-gradient-to-br hover:bg-tertiary hover:border-b-4 hover:border-primary cursor-pointer transition-all duration-300 ease-in-out"} onClick={() => {
                            alert("Congratulations!! Your Reservation has been Confirmed");
                        }}>Reserve Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}