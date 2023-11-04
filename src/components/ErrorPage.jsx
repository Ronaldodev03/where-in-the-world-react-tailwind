import { useRouteError } from "react-router-dom";
import Error from "./Error";
import { useNavigate, useNavigation } from "react-router-dom";
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
        <div className="fill-textBlack dark:fill-primaryLight text-textBlack dark:text-white transform duration-300 ease-in-out">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="call-made">
              <path
                id="Shape"
                fillRule="evenodd"
                fill="inherit"
                clipRule="evenodd"
                d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
              />
            </g>
          </svg>
        </div>
        <p className=" text-textBlack dark:text-white  text-sm font-light leading-5 py-[0.4375rem] ">
          Home
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
