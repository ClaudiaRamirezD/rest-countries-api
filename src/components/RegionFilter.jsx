import { useState } from 'react';

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

export default function CustomSelect({ onFilter }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('');

    return (
        <div className="relative my-4 w-58 self-start rounded-md border-1 border-stone-200 bg-[var(--white-dark-mode-text-light-mode-elements)] p-4 shadow-lg dark:border-none dark:bg-[var(--dark-mode-elements)] dark:text-[var(--dark-mode-text-light-mode-elements)]">
            <div
                onClick={() => setOpen(!open)}
                className="flex cursor-pointer items-center justify-between rounded px-3 text-base"
            >
                <span className="text-gray-600 dark:text-[var(--dark-mode-text-light-mode-elements)]">
                    {selected || 'Filter by Region'}
                </span>
                <span className="text-gray-400">▼</span>
            </div>

            {open && (
                <ul className="absolute top-full left-0 z-10 mt-1 w-full rounded bg-white py-4 shadow-md dark:bg-[var(--dark-mode-elements)] dark:text-[var(--dark-mode-text-light-mode-elements)]">
                    {regions.map((region) => (
                        <li
                            key={region}
                            onClick={() => {
                                setSelected(region);
                                onFilter(
                                    region === 'America' ? 'Americas' : region,
                                );
                                setOpen(false);
                            }}
                            className="cursor-pointer px-7 py-1 hover:bg-gray-100"
                        >
                            {region}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
