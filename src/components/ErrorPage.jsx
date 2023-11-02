import { useRouteError } from "react-router-dom";
import Error from "./Error";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  /* console.log(error.message); */
  const navigate = useNavigate();
  const path = "https://where-in-the-world-react-tailwind.vercel.app";

  return (
    <div>
      {/* back button */}
      <div className=" shadow-custom-4 flex px-6  w-[6.5rem] gap-2 dark:bg-primaryDark rounded-[0.125rem] mb-4">
        <img
          className="dark:hidden"
          src={`${path}/src/assets/left-arrow.svg`}
          alt="left arrow icon"
          width={20}
          height={20}
        />
        <img
          className="hidden dark:block"
          src={`${path}/src/assets/left-arrow-dark-mode.svg`}
          alt="left arrow icon"
          width={20}
          height={20}
        />
        <button
          onClick={() => navigate("/")}
          className=" text-textBlack dark:text-white  text-sm font-light leading-5 py-[0.4375rem] "
        >
          Back
        </button>
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
