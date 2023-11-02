/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import { useNavigate, useNavigation } from "react-router-dom";
import { leftArrow, leftArrowDarkMode } from "../assets";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const CountryInside = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  //console.log(data);
  const {
    name,
    flags,
    population,
    region,
    capital,
    tld,
    currencies,
    languages,
    subregion,
    borders,
  } = data.country[0];

  //get border name through
  const getBorder = (cca3) => {
    const [selectedCountry] = data.countries.filter((c) => c.cca3 == cca3);
    return selectedCountry ? selectedCountry.name.common : null;
  };

  //get country through cca3
  const getCountry = (cca3) => {
    const [selectedCountry] = data.countries.filter((c) => c.cca3 == cca3);
    return selectedCountry ? selectedCountry.name.official : null;
  };

  //next key for country[0].currencies is variable, so we need this function to get the key
  function getFirstKey(object) {
    if (!object) {
      return;
    }
    const keys = Object.keys(object);
    if (keys.length > 0) {
      return object[keys];
    }
  }
  const currency = getFirstKey(currencies);

  //next key for country[0].languages and country[0].name.nativeName are variable, so we need this function to get the values
  function getArray(object) {
    const keys = Object.keys(object);
    if (keys.length > 0) {
      const valuesArray = [];
      for (let i = 0; i < keys.length; i++) {
        valuesArray.push(object[keys[i]]);
      }
      return valuesArray;
    }
    return [];
  }
  const langs = getArray(languages);
  const nativeNameCountry = getArray(name.nativeName);

  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <div className="pt-4 px-[1.375rem]">
      <div
        onClick={() => navigate("/")}
        className=" cursor-pointer shadow-custom-4 flex px-6  w-[6.5rem] gap-2 dark:bg-primaryDark rounded-[0.125rem] items-center dark:hover:bg-secondaryDark hover:bg-secondaryLight"
      >
        <div className="dark:hidden">
          <img src={leftArrow} alt="left arrow icon" />
        </div>
        <div className="hidden dark:block">
          <img
            src={leftArrowDarkMode}
            alt="left arrow icon"
            width={560}
            height={450}
          />
        </div>
        <p className=" text-textBlack dark:text-white  text-sm font-light leading-5 py-[0.4375rem] ">
          Back
        </p>
      </div>

      <div className="grid pt-16 lg:grid-cols-4 lg:gap-x-[clamp(4rem,8vw,8.75rem)] lg:place-items-center">
        <div className=" lg:col-span-2 rounded-md row-span-2 w-full ">
          <img
            src={flags.svg}
            alt={flags.alt}
            className=" rounded-md lg:object-conver w-full max-h-[25rem]"
          />
        </div>
        <div className=" lg:col-span-2 w-full lg:grid lg:grid-row-2 row-span-2  ">
          <div className="pt-12 lg:gap-8 lg:pt-0 md:flex md:justify-between w-full md:mx-auto ">
            <div>
              <h2 className=" text-textBlack dark:text-white font-extrabold leading-normal text-[1.375rem] mb-4">
                {name.common}
              </h2>
              <p className=" text-textBlack dark:text-white text-sm font-light leading-8 ">
                <span className=" font-semibold  ">Native Name: </span>
                {nativeNameCountry[0].official}
              </p>
              <p className=" text-textBlack dark:text-white text-sm font-light leading-8 ">
                <span className=" font-semibold  ">Population: </span>
                {population}
              </p>
              <p className=" text-textBlack dark:text-white text-sm font-light leading-8 ">
                <span className=" font-semibold  ">Region: </span>
                {region}
              </p>
              <p className=" text-textBlack dark:text-white text-sm font-light leading-8 ">
                <span className=" font-semibold  ">Sub Region: </span>
                {subregion}
              </p>
              <p className=" text-textBlack dark:text-white text-sm font-light leading-8 ">
                <span className=" font-semibold  ">Capital: </span>
                {capital}
              </p>
            </div>

            <div className="pt-8 md:mt-4">
              <p className=" text-textBlack dark:text-white text-sm font-light leading-8 ">
                <span className=" font-semibold  ">Top Level Domain: </span>
                {tld}
              </p>
              <p className=" text-textBlack dark:text-white text-sm font-light leading-8 ">
                <span className=" font-semibold  ">Currencies: </span>
                {currency.name}
              </p>
              <p className=" text-textBlack dark:text-white text-sm font-light leading-8 ">
                <span className=" font-semibold  ">Languages: </span>
                {langs.reverse().join(", ")}
              </p>
            </div>
          </div>
          <div className="pt-8 lg:flex lg:items-start lg:gap-4 ">
            <h3 className=" text-textBlack dark:text-white text-base font-semibold leading-6 pb-4 whitespace-nowrap">
              Border Countries:
            </h3>
            {!borders ? (
              <p className=" text-textBlack dark:text-white text-sm font-light leading-6">
                No Borders
              </p>
            ) : (
              <div className=" w-full gap-[0.625rem] grid grid-rows-1 grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
                {borders.map((border, index) => {
                  return (
                    <Link
                      to={`/country/name/${getCountry(border)}`}
                      key={index}
                      className=" flex justify-center shadow-custom-5 px-[2rem] py-[0.6rem] text-xs font-light dark:text-white dark:bg-primaryDark rounded-sm whitespace-nowrap
              ]"
                    >
                      {getBorder(border)}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInside;
