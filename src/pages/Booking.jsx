import Title from "../components/Title.jsx";
import DisplayWhenScrolled from "../components/DisplayWhenScrolled.jsx";
import Footer from "../components/Footer.jsx";
import Stepper from "../components/Stepper.jsx";

export default function Booking() {


    return (
        <div className={"bg-backg w-full min-h-screen flex flex-col justify-start items-center pt-10"}>
            <Title text={"Book Your Stay"} />
            <Stepper />
            <DisplayWhenScrolled children={<Footer />} />
        </div>
    )
}