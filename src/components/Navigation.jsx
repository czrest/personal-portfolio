import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { Progress, Tooltip, ThemeProvider } from "@material-tailwind/react";

import { customTheme } from "../customTheme";

import PaperPlaneLogo from "../icons/paperplanelogo";
import MagneticHover from "./placeholders/MagneticHover";

import {
  currentPageAtom,
  scrollToPageAtom,
  isButtonPressed,
  currentSceneAtom,
  dataThemeAtom,
  currentProgressAtom,
} from "../GlobalState";

const tabs = [
  { id: 1, label: "Samuel Torreda" },
  { id: 4, label: "About" },
  { id: 6, label: "Projects" },
  { id: 8, label: "Skills" },
  { id: 9, label: "Education" },
  { id: 10, label: "Contact" },
];

export default function Navigation({}) {
  const [activeHover, setActiveHover] = useState({
    currentHover: tabs[0].id,
    hovered: false,
  });

  const [currentPage] = useAtom(currentPageAtom);
  const [currentScene] = useAtom(currentSceneAtom);
  const [currentProgress] = useAtom(currentProgressAtom);
  const [, setScrollToPage] = useAtom(scrollToPageAtom);
  const [, setButtonPressed] = useAtom(isButtonPressed);
  
  const [dataTheme, setdataTheme] = useAtom(dataThemeAtom);

  function changeTheme(){
    if(dataTheme === "lighttheme"){
      setdataTheme("darktheme");
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setdataTheme("lighttheme");
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  function goToPage(selectedPage) {
    setScrollToPage(selectedPage);
    setButtonPressed((prev) => !prev);
  }

  function handleHover(newVal, status) {
    setActiveHover(() => {
      return {
        currentHover: newVal,
        hovered: status,
      };
    });
  }

  useEffect(() => {
    if (!activeHover.hovered) {
      setActiveHover((prevVal) => {
        return {
          ...prevVal,
          currentHover: currentPage,
        };
      });
    }
  }, [currentPage]);

  const showBG = currentScene >= 12 && currentScene <= 16;

  return (
    <>
      <ThemeProvider value={customTheme}>
        <Progress
          className="absolute z-20 rounded-none top-0 left-0 right-0 rotate-180 bg-accent-3"
          size="sm"
          value={currentProgress}
        ></Progress>
      </ThemeProvider>

      <div
        className={`w-full flex fixed ${
          showBG ? "top-7" : "top-3"
        } z-20 justify-center items-center ease-in-out duration-200`}
      >
        <a
          onClick={() => goToPage(1)}
          className={`absolute ease-in-out items-center justify-center w-14 h-14 left-10 flex hover:shadow-lg hover:shadow-tertiary/50 hover:contrast-125 rounded-md bg-tertiary z-30 ${
            showBG ? "opacity-100" : "opacity-90 hover:opacity-100"
          } duration-700`}
        >
          <MagneticHover
            className={"group h-6/5 w-6/5 items-center justify-center flex"}
          >
            <PaperPlaneLogo height={"56px"} width={"56px"} />
          </MagneticHover>
        </a>

        <Tooltip
          content="Change theme"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: -25 },
          }}
          placement="bottom"
          className={"text-accent-5 font-codecr bg-tertiary z-10"}
        >
          <button
            onClick={() => changeTheme()}
            className={`absolute ease-in-out items-center justify-center w-14 h-14 right-10 flex hover:contrast-125 rounded-md bg-tertiary z-90 ${
              showBG
                ? "opacity-100"
                : "opacity-90 hover:opacity-100"
            } duration-700`}
          >
            <MagneticHover
              className={"group h-6/5 w-6/5 items-center justify-center flex"}
            >
              <div className="rounded-full h-8 w-8 group-hover:w-10 group-hover:h-10 group-hover:shadow-lg group-hover:shadow-tertiary/50 bg-secondary z-10 opacity-90"></div>
            </MagneticHover>
          </button>
        </Tooltip>

        <ul
          className={`flex space-x-10 p-3 rounded-full group -z-30 ease-in-out duration-200 ${
            showBG
              ? "bg-secondary backdrop-blur-md bg-opacity-80 hover:shadow-lg hover:bg-opacity-100 hover:shadow-secondary/50"
              : ""
          }`}
          onMouseLeave={() => handleHover(currentPage, false)}
        >
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => goToPage(tab.id)}
              onMouseEnter={() => handleHover(tab.id, true)}
              className={`${
                currentPage === tab.id ||
                (tab.id === 1 && currentPage <= 3) ||
                (tab.id === 4 && currentPage >= 4 && currentPage <= 5) ||
                (tab.id === 6 && currentPage >= 6 && currentPage <= 7) ||
                (tab.id >= 10 && currentPage >= 10)
                  ? "text-accent-3 font-codecb"
                  : "hover:text-accent-4 font-codecr"
              } cursor-pointer relative rounded-md px-3 py-1.5 text-md font-medium outline-sky-400 duration-500 focus-visible:outline-2`}
            >
              {(currentPage === tab.id ||
                (tab.id === 1 && currentPage <= 3) ||
                (tab.id === 4 && currentPage >= 4 && currentPage <= 5) ||
                (tab.id === 6 && currentPage >= 6 && currentPage <= 7) ||
                (tab.id >= 10 && currentPage >= 10)) && (
                <motion.span
                  layoutId="bubble"
                  className={`absolute inset-0 -z-10 bg-tertiary ${
                    showBG ? "rounded-full" : "rounded-md"
                  }`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {(activeHover.currentHover === tab.id ||
                (tab.id === 1 && currentPage <= 3 && !activeHover.hovered) ||
                (tab.id === 4 &&
                  currentPage >= 4 &&
                  currentPage <= 5 &&
                  !activeHover.hovered) ||
                (tab.id === 6 &&
                  currentPage >= 6 &&
                  currentPage <= 7 &&
                  !activeHover.hovered) ||
                (tab.id >= 10 &&
                  currentPage >= 10 &&
                  !activeHover.hovered)) && (
                <motion.span
                  initial={{ opacity: activeHover.hovered ? 1 : 0 }}
                  layoutId="border"
                  className={`absolute inset-0 -z-20 ${
                    showBG ? "rounded-full" : "rounded-md"
                  } border border-accent-4`}
                  transition={{ type: "spring", bounce: 0.3, duration: 0.3 }}
                />
              )}
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
