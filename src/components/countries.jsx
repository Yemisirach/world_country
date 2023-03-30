import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../css/Countries.css";

const Countries = () => {
  const { countries } = useSelector((state) => state.countries);

  const alpha3Code = useParams().alpha3Code || "";
  const selectedCountry = countries.find(
    (country) => country.alpha3Code === alpha3Code
  );

  if (selectedCountry == 0) {
    return <p>Country Page not found</p>;
  }

  return (
    <div className="main-list">
      <div className="flag-info">
        <div className="flag-image">
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            className="country-flag"
          />
          <h2>{selectedCountry.name}</h2>
        </div>
      </div>
      <div className="selected-country-details">
        <h3 className="country-details">Stats Breakdown</h3>
      </div>
      <ul className="country-details-content">
        <strong>Timezone: {selectedCountry.timezones}</strong>
        <strong>Capital: {selectedCountry.capital}</strong>
        <strong>
          Population: {selectedCountry.population.toLocaleString()}
        </strong>
        <strong>{selectedCountry.population}</strong>
        <strong>
          Area: {selectedCountry.area.toLocaleString()} km
          <sup>2</sup>
        </strong>
        <strong>
          Languages:
          {selectedCountry.languages
            .map((language) => language.name)
            .join(", ")}
        </strong>
        <strong>
          Currencies:
          {selectedCountry.currencies.map((currency) => currency.name).join("")}
        </strong>
      </ul>
    </div>
  );
};

export default Countries;
