import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RegionFilter from './components/RegionFilter';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = (term) => setSearchTerm(term);
  const handleFilter = (region) => setRegion(region);

  // Filter countries based on search term and region
  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      return (
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (region === '' || country.region === region)
      );
    });
  }, [countries, searchTerm, region]);

  // Fetch countries from the API
  useEffect(() => {
    const API_URL = 'https://restcountries.com/v3.1/all';
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch countries. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="container w-full font-[var(--font-primary)]">
        <Header />
        <Routes>
          {/* Main page */}
          <Route
            path="/"
            element={
              <div className="app bg-[var(--grey-50-light-mode-background)]">
                <main className="p-4 py-8 flex flex-col items-center justify-center gap-8">
                  <SearchBar onSearch={handleSearch} />
                  <RegionFilter onFilter={handleFilter} />
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <CountryList countries={filteredCountries} />
                  )}
                  {error && <p className="text-red-500">{error}</p>}
                </main>
              </div>
            }
          />
          {/* Country details */}
          <Route
            path="/country/:countryCode"
            element={<CountryDetails countries={countries} />} 
            
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;