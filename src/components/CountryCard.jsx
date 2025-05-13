import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
      <Link to={`/country/${country.cca3}`} className="country-card">
          <div className="rounded-md border-1 border-stone-200 bg-[var(--white-dark-mode-text-light-mode-elements)] shadow-lg dark:border-none dark:bg-[var(--dark-mode-elements)]">
              <img
                  className="object-fit h-48 w-full overflow-hidden rounded-t-md"
                  src={country.flags.png}
                  alt={`${country.name.common} flag`}
              />
              <div className="p-6">
                  <h2 className="text-xl font-[var(--font-800)]">
                      {country.name.common}
                  </h2>
                  <div className="flex flex-col gap-2 py-4">
                      <p>
                          <span className="font-bold">Population:</span>{' '}
                          {country.population.toLocaleString()}
                      </p>
                      <p>
                          <span className="font-bold">Region:</span>{' '}
                          {country.region === 'Americas'
                              ? 'America'
                              : country.region}
                      </p>
                      <p>
                          <span className="font-bold">Capital:</span>{' '}
                          {country.capital ? country.capital[0] : 'N/A'}
                      </p>
                  </div>
              </div>
          </div>
      </Link>
  );
}

export default CountryCard;
