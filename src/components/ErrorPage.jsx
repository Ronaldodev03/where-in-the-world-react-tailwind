import { useRouteError } from "react-router-dom";
import Error from "./Error";
import { useNavigate, useNavigation } from "react-router-dom";
import { leftArrow, leftArrowDarkMode } from "../assets";
import Loader from "./Loader";
const ErrorPage = () => {
  const error = useRouteError();
  /* console.log(error.message); */
  const navigate = useNavigate();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <div>
      {/* back button */}
      <div
        onClick={() => navigate("/")}
        className=" mb-4 cursor-pointer shadow-custom-4 flex px-6  w-[6.5rem] gap-2 dark:bg-primaryDark rounded-[0.125rem] items-center dark:hover:bg-secondaryDark hover:bg-secondaryLight"
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
      <h1 className=" text-[clamp(0.875rem,3.5vw,1.5rem)] leading-5  md:leading-normal font-extrabold text-textBlack dark:text-white">
        SOMETHING WENT WRONG....
      </h1>

      <Error>
        <p className=" text-center text-[clamp(0.875rem,3.5vw,1.5rem)] ">
          {error.statusText || error.message}
        </p>
      </Error>
    </div>
  );
};

export default ErrorPage;
