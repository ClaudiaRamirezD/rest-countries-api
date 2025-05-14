import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ onSearch }) {
    return (
        <div className="h-full rounded-md border border-stone-200 bg-[var(--white-dark-mode-text-light-mode-elements)] p-4 shadow-lg focus-within:border-[var(--light-mode-input)] dark:border-none dark:bg-[var(--dark-mode-elements)] dark:text-[var(--dark-mode-text-light-mode-elements)]">
            <div className="flex items-center gap-6 px-4">
                <FontAwesomeIcon
                    icon={faSearch}
                    className="text-gray-500 dark:text-[var(--dark-mode-text-light-mode-elements)]"
                />
                <input
                    type="text"
                    placeholder="Search for a country..."
                    aria-label="Search for a country"
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full bg-transparent outline-none focus:outline-none dark:text-[var(--dark-mode-text-light-mode-elements)]"
                />
            </div>
        </div>
    );
}

export default SearchBar;
