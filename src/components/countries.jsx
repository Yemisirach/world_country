import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../css/Countries.css";

const Countries = () => {
  const { countries } = useSelector((state) => state.countries);

  const alpha3CodeId = useParams().alpha3Code || "";
  const selectWrrapedCountry = countries.find(
    (country) => country.alpha3Code === alpha3CodeId
  );

  if (selectWrrapedCountry == 0) {
    return <p>Country Page not found</p>;
  }

  return (
    <div className="main-list">
      <div className="flag-info">
        <div className="flag-image">
          <img
            src={selectWrrapedCountry.flag}
            alt={selectWrrapedCountry.name}
            className="country-flag"
          />
          <h2>{selectWrrapedCountry.name}</h2>
        </div>
      </div>
      <div className="selected-country-details">
        <h3 className="country-details">Stats Breakdown</h3>
      </div>
      <ul className="country-details-content">
        <strong>Timezone: {selectWrrapedCountry.timezones}</strong>
        <strong>Capital: {selectWrrapedCountry.capital}</strong>
        <strong>
          Population: {selectWrrapedCountry.population.toLocaleString()}
        </strong>
        <strong>{selectWrrapedCountry.population}</strong>
        <strong>
          Area: {selectWrrapedCountry.area.toLocaleString()} km
          <sup>2</sup>
        </strong>
        <strong>
          Languages:
          {selectWrrapedCountry.languages
            .map((language) => language.name)
            .join(", ")}
        </strong>
        <strong>
          Currencies:
          {selectWrrapedCountry.currencies
            .map((currency) => currency.name)
            .join("")}
        </strong>
      </ul>
    </div>
  );
};

export default Countries;
