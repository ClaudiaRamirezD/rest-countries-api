import CountryCard from './CountryCard';

function CountryList({ countries }) {
    return (
        <div className="countries-grid flex w-full flex-wrap justify-between gap-y-12 px-8 md:px-8 lg:px-0 lg:gap-x-5 lg:gap-y-20">
            {countries.map((country) => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </div>
    );
}

export default CountryList;
