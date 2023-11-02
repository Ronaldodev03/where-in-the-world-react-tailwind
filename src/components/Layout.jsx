import { Outlet } from "react-router-dom";
import styles from "../style";
import { useState, useEffect } from "react";

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
          <h1 className=" text-[clamp(0.875rem,3.5vw,1.5rem)] leading-5  md:leading-normal font-extrabold text-textBlack dark:text-white">
            Where in the world?
          </h1>
          <div className="flex gap-2 ">
            {theme === "light" ? (
              <img
                onClick={toggleTheme}
                src="/src/assets/moon.svg"
                alt="moon-icon"
                className=" cursor-pointer"
                width={20}
                height={20}
              />
            ) : (
              <img
                onClick={toggleTheme}
                src="/src/assets/moon-light.svg"
                alt="moon-icon"
                className=" cursor-pointer"
                width={20}
                height={20}
              />
            )}
            <h2 className="text-textBlack dark:text-white text-[clamp(0.75rem,2vw,1rem)] leading-normal font-semibold ">
              Dark Mode
            </h2>
          </div>
        </header>
      </div>

      <div
        className={` ${styles.paddingX} ${styles.paddingY} min-h-screen bg-primaryLight dark:bg-secondaryDark`}
      >
        <main className={`${styles.boxWidth} `}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
