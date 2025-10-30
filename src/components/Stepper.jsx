import {useState} from "react";
import Heading from "./Heading.jsx";
import Button from "./Button.jsx";
import Label from "./Label.jsx";
import FormInput from "./FormInput.jsx";
import RoomCards from "./RoomCards.jsx";
import MobileRoomCards from "./MobileRoomCards.jsx";
import ConfirmationSection from "./ConfirmationSection.jsx";

export default function Stepper() {

    const [step, setStep] = useState(1);
    const [guestData, setGuestData] = useState({
        name: "",
        email: "",
        checkInDate: "",
        checkOutDate: "",
        adults: 0,
        children: 0,
        roomType: "",
        paymentMethod: "",
    });
    const [errorMsg, setErrorMsg] = useState("");

    const nextStep = () => {
        setStep(prev => {
            if(prev === 3) return 3;
            return prev + 1;
        });
    }

    const backStep = () => {
        setStep(prev => {
            if(prev === 1) return 1;
            return prev - 1;
        })
    }

    const isGuestDataComplete = (data) => {
        if (
            data.name === "" ||
            data.email === "" ||
            data.checkInDate === "" ||
            data.checkOutDate === "" ||
            data.adults === 0 ||
            data.paymentMethod === ""
        ) {
            setStep(1);
            alert("Some Details are not Filled");
            return false;
        } else if(data.roomType === ""){
            setStep(2);
            alert("Room Type not selected");
            return false;
        }
        return true;
    };

    const submitGuestInfo = (e) => {
        e.preventDefault();
        setStep(2);
    }

    const handleRoomSelect = (roomName) => {
        setGuestData((prev) => ({
            ...prev,
            roomType: roomName,
        }));
        nextStep();
    };

    return(
        <div className={"flex flex-col justify-start items-center bg-light w-full my-6 py-6"}>
            <div className={"flex items-center justify-center text-primary"}>
                {
                    [1, 2, 3].map( item => {
                        if(item === 3){
                            return (
                                <span className={`bg-backg rounded-full font-lexend p-3 px-5 ${step === item ? "bg-green-300" : ""}`}>{item}</span>
                            )
                        }
                        return (
                            <div className={"flex items-center justify-center"}>
                                <span className={`bg-backg rounded-full font-lexend p-3 px-5 ${step === item ? "bg-green-300" : ""}`}>{item}</span>
                                <hr className={"w-[50px] border-1"} />
                            </div>
                        )
                    })
                }
            </div>

            <div className={"p-6 my-3 w-full"}>
                {step === 1 &&
                    <div className="flex justify-center items-center min-h-screen ">
                        <div className="flex flex-col justify-center items-center p-8 rounded-lg shadow-lg w-full max-w-xl bg-backg">
                            <Heading title={"Booking Details"} />
                            <form onSubmit={submitGuestInfo} className="flex flex-col space-y-5 w-full">
                                <Label label={"Name"} />
                                <FormInput
                                    name={"name"}
                                    type={"text"}
                                    placeholder={"Name"}
                                    guestData={guestData}
                                    setGuestData={setGuestData}
                                />

                                <Label label={"Email"} />
                                <FormInput
                                    name={"email"}
                                    type={"email"}
                                    placeholder={"Email"}
                                    guestData={guestData}
                                    setGuestData={setGuestData}
                                />

                                <Label label={"Check-in Date"} />
                                <FormInput
                                    name={"checkInDate"}
                                    type={"date"}
                                    placeholder={"Check-in Date"}
                                    guestData={guestData}
                                    setGuestData={setGuestData}
                                />

                                <Label label={"Check-out Date"} />
                                <FormInput
                                    name={"checkOutDate"}
                                    type={"date"}
                                    placeholder={"Check-out Date"}
                                    guestData={guestData}
                                    setGuestData={setGuestData}
                                />

                                <Label label={"Adults"} />
                                <FormInput
                                    name={"adults"}
                                    type={"number"}
                                    placeholder={"Number of Adults"}
                                    guestData={guestData}
                                    setGuestData={setGuestData}
                                />

                                <Label label={"Children"} />
                                <FormInput
                                    name={"children"}
                                    type={"number"}
                                    placeholder={"Number of Children"}
                                    guestData={guestData}
                                    setGuestData={setGuestData}
                                />

                                <Label label={"Payment Method"} />
                                <select className="outline-none border-1 border-primary text-gray-900 text-lg font-lexend rounded-xl p-3 focus:ring-2 focus:ring-primary" name={"paymentMethod"} onChange={(e) => {
                                    const { name, value } = e.target;
                                    setGuestData({
                                        ...guestData,
                                        [name]: value,
                                    });
                                }}>
                                    <option value={""}>Select Method</option>
                                    <option value={"Credit Card"}>Credit Card</option>
                                    <option value={"Debit Card"}>Debit Card</option>
                                    <option value={"NEFT"}>NEFT</option>
                                    <option value={"UPI"}>UPI</option>
                                </select>

                                <button
                                    className="mt-2 bg-secondary text-light rounded-2xl text-sm md:text-md active:scale-95 font-lexend px-5 py-3 border-primary hover:border-b-2 hover:scale-105"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                {errorMsg && <p className={"text-red-400 text-md font-mono"}>*{errorMsg}</p>}
                            </form>
                        </div>
                    </div>
                }
                {step === 2 &&
                    <div className="flex justify-center items-center min-h-screen ">
                        <div className="flex flex-col justify-center items-center p-8 rounded-lg shadow-lg  w-fit bg-backg">
                            <Heading title={"Booking Details"} />
                            <div className={"hidden md:block"}>
                                <RoomCards onClick={handleRoomSelect} />
                            </div>
                            <div className={"block md:hidden"}>
                                <MobileRoomCards onclick={handleRoomSelect} />
                            </div>
                        </div>
                    </div>
                }
                {step === 3 && isGuestDataComplete(guestData) &&
                    <div className={"flex flex-col justify-center items-center"}>
                        <div className={"flex flex-col justify-center items-center w-fit bg-backg rounded-2xl py-6"}>
                            <Heading title={"Confirmation"} />
                            <ConfirmationSection data={guestData} />
                        </div>
                    </div>

                }
                <div className={"flex items-center justify-center gap-10 my-4"}>
                    <Button name={"Back"} onClick={backStep} />
                    <Button name={"Next"} onClick={nextStep} />
                </div>
            </div>
        </div>
    )

}