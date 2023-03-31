import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../css/conutry.css';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { fechCountries } from '../redux/contries/contriesSlice';

function Country() {
  const { countries, loading, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    dispatch(fechCountries());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }, [countries, searchTerm]);

  if (loading) {
    return (
      <h2 className="loading">
        <AiOutlineLoading3Quarters />
      </h2>
    );
  }
  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <>
      <div className="search-container ">
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search for a country..."
        />
      </div>
      <div className="countries-container">
        {filterCountries.map((country) => (
          <div className="country-item" key={country.alpha3Code}>
            <Link to={`/countries/${country.alpha3Code}`}>
              <BsFillArrowRightCircleFill className="arrow-icon" />
              <img
                src={country.flag}
                alt={country.name}
                className="country-flag"
              />
              <div className="country-info">
                <h3 className="country-name">{country.name}</h3>
                <p className="country-timezone">{country.capital}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Country;
