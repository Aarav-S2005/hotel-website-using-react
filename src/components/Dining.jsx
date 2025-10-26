import Heading from "./Heading.jsx";
import DiningCards from "./DiningCards.jsx";

export default function Dining(){
    return(
        <div id={"dining"} className={"flex flex-col justify-center items-center py-10 bg-backg"}>
            <Heading title={"Dining"} />
            <DiningCards />
        </div>
    )
}