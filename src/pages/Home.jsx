import { useState } from "react";
import Cards from "../components/Cards";
import { search, chevron, chevronDark } from "../assets";
import { useNavigation } from "react-router-dom";
import Loader from "../components/Loader";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("Filter by Region");
  const [inputValue, setInputValue] = useState("");
  const navigation = useNavigation();
  const toggleDropDown = () => {
    setIsVisible(!isVisible);
  };

  const resetOpacity = () => {
    setIsVisible(false);
  };

  const handleFilter = (value) => {
    setFilter(value);
    resetOpacity();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row  md:justify-between w-full items-start">
        {/* search input */}
        <div className=" flex bg-secondaryLight dark:bg-primaryDark  gap-[1.625rem] py-[0.875rem] shadow-custom-2 w-full md:w-[clamp(18.75rem,40vw,30rem)] pl-8 cursor-pointer">
          <img src={search} alt="search icon" width={16} height={16} />
          <input
            type="text"
            placeholder="Search for a country..."
            className="  placeholder:text-[#C4C4C4] dark:text-white dark:bg-primaryDark placeholder:md:text-[#848484] text-[clamp(0.75rem,2vw,0.875rem)] leading-5 w-full mr-[1.625rem] outline-none "
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        {/* dropdown */}
        <div className="  shadow-custom-2 mt-10 md:mt-0 w-[clamp(12.5rem,50%,50%)] md:w-[12.5rem]  text-textBlack text-[clamp(0.75rem,2vw,0.875rem)] leading-5 relative bg-secondaryLight dark:bg-primaryDark dark:text-white ">
          <div
            className="flex items-center justify-between px-6 py-[0.875rem] cursor-pointer"
            onClick={toggleDropDown}
          >
            <p>{filter}</p>
            <div className=" dark:hidden">
              <img src={chevron} alt="chevron icon" width={10} height={10} />
            </div>

            <div className=" dark:block hidden">
              <img
                src={chevronDark}
                alt="chevron icon"
                width={10}
                height={10}
              />
            </div>
          </div>
          <div
            className={`  py-4 cursor-pointer top-[3.25rem] left-[0] shadow-custom-2 absolute z-10 w-full bg-secondaryLight dark:bg-primaryDark rounded-[0.3125rem] transition-opacity duration-300 ease-in-out  ${
              isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <p
              className="mb-[0.5rem] hover:bg-primaryLight dark:hover:bg-secondaryDark hover:rounded-sm px-6 mx-auto w-[90%]"
              onClick={() => handleFilter("Filter by Region")}
            >
              All
            </p>
            <p
              className="mb-[0.5rem] hover:bg-primaryLight dark:hover:bg-secondaryDark hover:rounded-sm px-6 mx-auto w-[90%]"
              onClick={() => handleFilter("Africa")}
            >
              Africa
            </p>
            <p
              className="mb-[0.5rem] hover:bg-primaryLight dark:hover:bg-secondaryDark hover:rounded-sm px-6 mx-auto w-[90%]"
              onClick={() => handleFilter("Americas")}
            >
              America
            </p>
            <p
              className="mb-[0.5rem] hover:bg-primaryLight dark:hover:bg-secondaryDark hover:rounded-sm px-6 mx-auto w-[90%]"
              onClick={() => handleFilter("Asia")}
            >
              Asia
            </p>
            <p
              className="mb-[0.5rem] hover:bg-primaryLight dark:hover:bg-secondaryDark hover:rounded-sm px-6 mx-auto w-[90%]"
              onClick={() => handleFilter("Europe")}
            >
              Europe
            </p>
            <p
              className=" hover:bg-primaryLight dark:hover:bg-secondaryDark hover:rounded-sm px-6 mx-auto w-[90%]"
              onClick={() => handleFilter("Oceania")}
            >
              Oceania
            </p>
          </div>
        </div>
      </div>

      <Cards filterName={filter} inputValue={inputValue} />
    </>
  );
}

export default Home;
