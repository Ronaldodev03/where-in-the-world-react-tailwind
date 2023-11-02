/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
const Card = ({ src, name, population, region, capital }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/country/name/${name}`)}
      className="shadow-custom-3 bg-secondaryLight dark:bg-primaryDark  rounded-[0.3125rem] duration-200 hover:scale-105 cursor-pointer"
    >
      <div>
        <img
          src={src}
          alt="flag"
          width={264}
          height={160}
          className=" rounded-t-[0.3125rem] object-cover w-full sm:h-[clamp(10rem,45.5vw,20rem)]  md:h-[clamp(10rem,20.5vw,15rem)] lg:h-[clamp(10rem,15.5vw,12.5rem)] xl:h-40 "
        />
      </div>

      <div className="p-6">
        <h2 className=" text-textBlack dark:text-white  font-extrabold leading-[1.625rem] text-lg mb-4">
          {name}
        </h2>
        <p className=" text-textBlack dark:text-white  text-sm font-light leading-4 mb-2">
          <span className=" font-semibold  ">Population: </span>
          {population}
        </p>
        <p className=" text-textBlack dark:text-white  text-sm font-light leading-4 mb-2">
          <span className=" font-semibold  ">Region: </span>
          {region}
        </p>
        <p className=" text-textBlack dark:text-white  text-sm font-light leading-4 mb-2">
          <span className=" font-semibold  ">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
