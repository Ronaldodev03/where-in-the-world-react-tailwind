import { Outlet } from "react-router-dom";
import styles from "../style";
import { useState, useEffect } from "react";
import { moon, moonLight } from "../assets";

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
          <h1 className=" cursor-pointer text-[clamp(0.875rem,3.5vw,1.5rem)] leading-5  md:leading-normal font-extrabold text-textBlack dark:text-white">
            Where in the world?
          </h1>
          <div onClick={toggleTheme} className="flex gap-2 cursor-pointer ">
            {theme === "light" ? (
              <img src={moon} alt="moon-icon" width={20} height={20} />
            ) : (
              <img src={moonLight} alt="moon-icon" width={20} height={20} />
            )}
            <h2 className="text-textBlack dark:text-white text-[clamp(0.75rem,2vw,1rem)] leading-normal font-semibold ">
              Dark Mode
            </h2>
          </div>
        </header>
      </div>

      <div
        className={` ${styles.paddingX} py-6 md:py-12 min-h-screen bg-primaryLight dark:bg-secondaryDark`}
      >
        <main className={`${styles.boxWidth} `}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
