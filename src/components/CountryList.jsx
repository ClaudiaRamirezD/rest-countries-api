import CountryCard from "./CountryCard";

function CountryList({ countries }) {
    return (
        <div className="countries-grid flex flex-col gap-13 justify-center px-8 ">
                {countries.map((country) => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
        </div>
    );
}   

export default CountryList;