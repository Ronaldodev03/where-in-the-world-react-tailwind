import { Outlet } from "react-router-dom";
import styles from "../style";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  const [theme, setTheme] = useState(null);

  /* toggles the theme */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  /* Theme according to system settings */
  useEffect(() => {
    /* check preference of the system */
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div
        /* I put "relative" here bc otherwise the shadow is not shown-custom-1 in the UI */
        className={`${styles.paddingX} ${styles.paddingY} w-full bg-secondaryLight dark:bg-primaryDark relative shadow-custom-1 `}
      >
        <header
          className={`${styles.boxWidth} flex justify-between items-center `}
        >
          <Link to="/">
            <h1 className=" cursor-pointer text-[clamp(0.875rem,3.5vw,1.5rem)] leading-5  md:leading-normal font-extrabold text-textBlack dark:text-white">
              Where in the world?
            </h1>
          </Link>
          <div onClick={toggleTheme} className="flex gap-2 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill={`${theme === "light" ? "textBlack" : "white"}`}
                d={`${
                  theme === "light"
                    ? "M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29c0-1.167.242-2.278.681-3.286z"
                    : "M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                }`}
              />
            </svg>

            <h2 className="text-textBlack dark:text-white text-[clamp(0.75rem,2vw,1rem)] leading-normal font-semibold ">
              Dark Mode
            </h2>
          </div>
        </header>
      </div>

      <div
        className={` ${styles.paddingX} py-6 md:py-12 min-h-screen bg-primaryLight dark:bg-secondaryDark duration-300 ease-linear`}
      >
        <main className={`${styles.boxWidth} `}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
