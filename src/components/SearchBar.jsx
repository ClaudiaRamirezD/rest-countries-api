import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ onSearch }) {
    return ( 
        <div className='w-full border-1  border-stone-200  rounded-md p-4 bg-[var(--white-dark-mode-text-light-mode-elements)] shadow-lg'>
            <div className='px-4 flex items-center gap-6 '>
                <FontAwesomeIcon icon={faSearch} className= " text-gray-500" />
                <input
                    type="text"
                    placeholder="Search for a country..."
                    aria-label="Search for a country"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SearchBar;