import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
        <div className="country-details flex flex-col gap-12 p-8 lg:p-16">
            {/* Botón de retroceso */}
            <button
                onClick={() => navigate(-1)}
                className="flex cursor-pointer items-center gap-2 self-start rounded border border-stone-200 bg-white px-6 py-1 font-[var(--font-primary)] shadow-lg dark:border-none dark:bg-[var(--dark-mode-elements)] dark:text-[var(--dark-mode-text-light-mode-elements)]"
            >
                <span className="text-lg">←</span>
                Back
            </button>

            {/* Detalles del país */}
            <div className="flex flex-col items-center justify-center gap-10 py-4 md:flex-row md:justify-between lg:justify-evenly lg:gap-40">
                <img
                    className="w-full object-cover lg:max-w-2/5"
                    src={country.flags.png}
                    alt={`${country.name.common} flag`}
                />
                <div className="flex flex-col md:gap-8">
                    <h1 className="text-2xl font-[var(--font-800)]">
                        {country.name.common}
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-14">
                        <div className="flex flex-col gap-4 md:gap-2 pt-6 md:pt-0">
                            <p>
                                <span className="font-bold">Native Name:</span>{' '}
                                {country.name.common}
                            </p>
                            <p>
                                <span className="font-bold">Population:</span>{' '}
                                {country.population.toLocaleString()}
                            </p>
                            <p>
                                <span className="font-bold">Region:</span>{' '}
                                {country.region || 'N/A'}
                            </p>
                            <p>
                                <span className="font-bold">Subregion:</span>{' '}
                                {country.subregion || 'N/A'}
                            </p>
                            <p>
                                <span className="font-bold">Capital:</span>{' '}
                                {country.capital ? country.capital[0] : 'N/A'}
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-2 pt-14 md:pt-0">
                            <p>
                                <span className="font-bold">
                                    Top Level Domain:
                                </span>{' '}
                                {country.tld ? country.tld[0] : 'N/A'}
                            </p>
                            <p>
                                <span className="font-bold">Currencies:</span>{' '}
                                {country.currencies
                                    ? Object.values(country.currencies)
                                          .map((currency) => currency.name)
                                          .join(', ')
                                    : 'N/A'}
                            </p>
                            <p>
                                <span className="font-bold">Languages:</span>{' '}
                                {country.languages
                                    ? Object.values(country.languages).join(
                                          ', ',
                                      )
                                    : 'N/A'}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-14 md:flex-row md:items-start 2xl:items-center md:pt-0">
                        <p>
                            <span className="font-bold">Border Countries:</span>
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {country.borders ? (
                                country.borders.map((border) => {
                                    const borderCountry = countries.find(
                                        (c) => c.cca3 === border,
                                    );
                                    return (
                                        <button
                                            key={border}
                                            className="cursor-pointer rounded border border-stone-200 bg-white px-4 py-2 font-[var(--font-primary)] shadow-lg dark:border-none dark:bg-[var(--dark-mode-elements)] dark:text-[var(--dark-mode-text-light-mode-elements)]"
                                            onClick={() =>
                                                navigate(`/country/${border}`)
                                            }
                                        >
                                            {borderCountry
                                                ? borderCountry.name.common
                                                : border}
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
