

export default function Title({text}) {
    return(
        <div className={"text-5xl text-primary font-cookie flex justify-center items-center gap-3"}>
            <hr className={"w-[50px] border-1"} />
            <span>{text}</span>
            <hr className={"w-[50px] border-1"} />
        </div>
    )
}