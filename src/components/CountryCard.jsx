function CountryCard({ country }) {
    return (
        <div className="country-card border-1  border-stone-200  bg-[var(--white-dark-mode-text-light-mode-elements)] shadow-lg rounded-md">
            <img
                className="h-48 w-full overflow-hidden rounded-t-md"
                src={country.flags.png}
                alt={`${country.name.common} flag`} />
            <div className="p-6">
                <h2 className="font-[var(--font-800)] text-xl">{country.name.common}</h2>
                <div className="py-4 flex flex-col gap-">
                    <p>
                        <span className="font-bold">Population:</span> {country.population.toLocaleString()}
                    </p>
                    <p>
                        <span className="font-bold">Region:</span> {country.region}
                    </p>
                    <p>
                        <span className="font-bold">Capital:</span> {country.capital ? country.capital[0] : 'N/A'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;