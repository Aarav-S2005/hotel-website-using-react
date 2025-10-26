import {villasAndSuitesContent} from "../util/constants.js";
import LazyImage from "./LazyImage.jsx";
import ReserveButtons from "./ReserveButton.jsx";

export default function VillasAndSuitesCard() {
    return (
        <div className={"flex flex-col items-center justify-center md:flex-row gap-10 py-6"}>
            {
                villasAndSuitesContent.map(item => (
                    <div className={"flex flex-col items-center justify-between p-5 rounded-3xl w-[80%]  md:w-[25%] h-[78vh] bg-backg"}>
                        <LazyImage src={item.path} alt={"Room"} animate={false} />
                        <h3 className={"font-quintessential text-2xl"}>{item.name}</h3>
                        <p className={"text-wrap text-md font-lexend mb-2"}>{item.content}</p>
                        <ReserveButtons />
                    </div>
                ))
            }
        </div>
    )
}