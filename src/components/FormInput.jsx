

export default function FormInput({name, type, guestData, setGuestData, placeholder}) {

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        setGuestData((prev) => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value
        }));
    };

    return(
        <input
            type={type}
            className={"outline-none border-1 border-primary text-gray-900 text-lg font-lexend rounded-xl p-2 "}
            onChange={handleChange}
            name={name}
            value={guestData[name]}
            placeholder={placeholder}
        />
    )
}