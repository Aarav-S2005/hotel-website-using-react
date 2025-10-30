

export default function Button({name, onClick}) {
    return(
        <button className={"bg-secondary text-light rounded-2xl text-sm md:text-md active:scale-95 font-lexend px-5 py-3 border-primary hover:border-b-2 hover:scale-105 "} onClick={onClick}>
            {name}
        </button>
    )
}