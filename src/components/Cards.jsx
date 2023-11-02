/* eslint-disable react/prop-types */
import Card from "./Card";
import { useLoaderData } from "react-router-dom";
import styles from "../style";

const Cards = ({ filterName, inputValue }) => {
  const countries = useLoaderData();
  // const countries = [];

  //filter by region
  const filteredByRegion =
    filterName === "Filter by Region"
      ? countries
      : countries.filter((country) => country.region === filterName);

  // Filter by name
  const filteredCountries = inputValue
    ? filteredByRegion.filter((country) =>
        country.name.official.toLowerCase().includes(inputValue.toLowerCase())
      )
    : filteredByRegion;

  if (filteredCountries.length === 0) {
    return (
      <p className="mt-10 text-textBlack text-[clamp(0.75rem,2vw,1rem)] leading-normal font-semibold dark:text-white">
        No countries found that meet the filters.
      </p>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[4.6875rem] mt-8 ${styles.paddingCardsX}`}
    >
      {filteredCountries.map((country, index) => (
        <Card
          key={index}
          src={country.flags.svg}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </div>
  );
};

export default Cards;
