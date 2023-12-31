/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion as m, useScroll, useTransform } from "framer-motion";
const Card = ({ src, name, nameOfficial, population, region, capital }) => {
  //saving  window width in state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.8], [0.1, 1]);
  const opacityProgressMobile = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const xSlice = useTransform(scrollYProgress, [0, 0.8], [-300, 1]);
  const ySlice = useTransform(scrollYProgress, [0, 0.8], [50, 1]);

  //updating state according to window width
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    //unmount listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // breakpoint
  const largeBreakpoint = 1024;
  const mediumBreakpoint = 600;

  return (
    <m.div
      ref={ref}
      style={{
        scale: windowWidth >= largeBreakpoint ? scaleProgress : 1, // width >= breackpoint => fires animation
        x: windowWidth < mediumBreakpoint ? xSlice : 1,
        y: windowWidth < mediumBreakpoint ? ySlice : 1,
        opacity:
          windowWidth < mediumBreakpoint
            ? opacityProgressMobile
            : opacityProgress, // width >= breackpoint => fires animation
      }}
    >
      <div
        onClick={() => navigate(`/country/name/${nameOfficial}`)}
        className="duration-200 hover:scale-105 shadow-custom-3 bg-secondaryLight dark:bg-primaryDark  rounded-[0.3125rem]  cursor-pointer"
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
        <div className="p-6 ">
          <h2 className=" text-textBlack dark:text-white  font-extrabold leading-[1.625rem] text-lg mb-4 ">
            {name}
          </h2>
          <p className=" text-textBlack dark:text-white  text-sm font-light leading-4 mb-2">
            <span className=" font-semibold  ">Population: </span>
            {new Intl.NumberFormat().format(population)}
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
    </m.div>
  );
};

export default Card;
