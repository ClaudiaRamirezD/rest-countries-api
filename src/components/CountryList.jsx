import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  return (
    <div className="countries-grid flex flex-col justify-center gap-13 px-8">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}

export default CountryList;
