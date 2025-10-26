import {Link as RouterLink} from "react-router-dom";

export default function ReserveButtons () {
    return (
        <RouterLink to={"/booking"}>
            <button className="ml-4 px-4 py-2 mr-2 font-quintessential text-lg rounded-xl bg-light transform hover:scale-110 hover:bg-gradient-to-br hover:from-light hover:to-tertiary hover:border-b-4 hover:border-primary cursor-pointer transition-all duration-300 ease-in-out ">
                Reserve
            </button>
        </RouterLink>
    )
}