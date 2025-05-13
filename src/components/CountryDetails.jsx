import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CountryDetails({ countries }) {
    const { countryCode } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [countryCode]); 

    // Find the country by name
    const country = countries.find((c) => c.cca3 === countryCode);

    if (!country) {
        return <p>Country not found</p>;
    }

    return (
        <div className="country-details p-8 flex flex-col gap-12">
            {/* Botón de retroceso */}
            <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-6 py-1 bg-white rounded shadow-lg border border-stone-200 font-[var(--font-primary)] self-start cursor-pointer"
            >
                <span className="text-lg">←</span>
                Back
            </button>

            {/* Detalles del país */}
            <div className="flex flex-col md:flex-row gap-10 py-4">
                <img
                    className="w-full md:w-1/2 object-contain"
                    src={country.flags.png}
                    alt={`${country.name.common} flag`}
                />
                <div>
                    <h1 className="text-2xl font-[var(--font-800)]">{country.name.common}</h1>
                    <div className="flex flex-col gap-4 pt-6">
                        <p>
                            <span className="font-bold">Native Name:</span> {country.name.common}
                        </p>
                        <p>
                            <span className="font-bold">Population:</span> {country.population.toLocaleString()}
                        </p>
                        <p>
                            <span className="font-bold">Region:</span> {country.region || 'N/A'}
                        </p>
                        <p>
                            <span className="font-bold">Subregion:</span> {country.subregion || 'N/A'}
                        </p>
                        <p>
                            <span className="font-bold">Capital:</span> {country.capital ? country.capital[0] : 'N/A'}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 pt-14">
                        <p>
                            <span className="font-bold">Top Level Domain:</span> {country.tld ? country.tld[0] : 'N/A'}
                        </p>
                        <p>
                            <span className="font-bold">Currencies:</span> {country.currencies
                                ? Object.values(country.currencies).map((currency) => currency.name).join(', ')
                                : 'N/A'}
                        </p>
                        <p>
                            <span className="font-bold">Languages:</span> {country.languages
                                ? Object.values(country.languages).join(', ')
                                : 'N/A'}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 pt-14">
                        <p>
                            <span className="font-bold">Border Countries:</span>
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {country.borders ? (
                                country.borders.map((border) => {
                                    const borderCountry = countries.find((c) => c.cca3 === border);
                                    return (
                                        <button
                                            key={border}
                                            className="px-4 py-2 bg-white rounded shadow-lg border border-stone-200 font-[var(--font-primary)]"
                                            onClick={() => navigate(`/country/${border}`)}
                                        >
                                            {borderCountry ? borderCountry.name.common : border}
                                        </button>
                                    );
                                })
                            ) : (
                                <p>No bordering countries</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryDetails;