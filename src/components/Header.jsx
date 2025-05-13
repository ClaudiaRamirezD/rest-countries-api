import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as solidMoon } from '@fortawesome/free-solid-svg-icons'; // Luna llena
import { faMoon as regularMoon } from '@fortawesome/free-regular-svg-icons'; // Luna vacía

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    }

    return (
        <header className='shadow-xl w-full bg-white border-b-3 border-stone-100'>
            <div className="header-content flex justify-between items-center px-4 py-6 ">
                <h1 className='text-black text-lg font-[var(--font-800)]'>Where in the world?</h1>
                <div className="color-scheme text-[var( --grey-950-light-mode-text)] font-[var(--font-600)] flex gap-2 justify-center items-center cursor-pointer" onClick={toggleDarkMode}>
                        <FontAwesomeIcon icon={darkMode ? solidMoon : regularMoon} />
                    <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
