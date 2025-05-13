import { useState } from "react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function CustomSelect({ onFilter }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    return (
        <div className="my-4 relative w-58 self-start rounded-md p-4 border-1  border-stone-200  bg-[var(--white-dark-mode-text-light-mode-elements)] shadow-lg">
        <div
            onClick={() => setOpen(!open)}
            className="flex justify-between items-center px-3 text-base rounded cursor-pointer"
        >
            <span className="text-gray-600">
            {selected || "Filter by Region"}
            </span>
            <span className="text-gray-400">▼</span>
        </div>

        {open && (
            <ul className="absolute top-full left-0 w-full bg-white mt-1 shadow-md rounded z-10 py-4">
            {regions.map((region) => (
                <li
                key={region}
                onClick={() => {
                    setSelected(region);
                    onFilter(region === "America" ? "Americas" : region);
                    setOpen(false);
                }}
                className="px-7 py-1 hover:bg-gray-100 cursor-pointer"
                >
                {region}
                </li>
            ))}
            </ul>
        )}
        </div>
    );
}
