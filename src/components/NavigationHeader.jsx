import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import { useAtom } from "jotai";
import { Tooltip } from "@material-tailwind/react";

import {
  currentPageAtom,
  currentSceneAtom,
  scrollToPageAtom,
  isButtonPressed,
  dataThemeAtom,
} from "../GlobalState";
import CinematicBar from "./CinematicBar";

import PaperPlaneLogo from "../icons/paperplanelogo";
import MagneticHover from "./MagneticHover";

export default function NavigationHeader() {
  const [currentScene] = useAtom(currentSceneAtom);
  const [currentPage] = useAtom(currentPageAtom);

  const [, setScrollToPage] = useAtom(scrollToPageAtom);
  const [, setButtonPressed] = useAtom(isButtonPressed);

  
  const [dataTheme, setdataTheme] = useAtom(dataThemeAtom);

  function goToPage(selectedPage) {
    setScrollToPage(selectedPage);
    setButtonPressed((prev) => !prev);
  }

  function changeTheme(){
    if(dataTheme === "lighttheme"){
      setdataTheme("darktheme");
    } else {
      setdataTheme("lighttheme");
    }
  }

  const shouldAnimateCinematic = currentScene >= 16 || currentScene === 1;

  const activePage1 = currentScene <= 6;
  const activePage2 = currentScene === 7 || currentPage === 4;
  const activePage3 = currentPage === 5;
  const activePage4 = currentPage === 6;
  const activePage5 = currentPage === 7;
  const activePage6 = currentPage >= 8;

  return (
    <>
      <div className="flex justify-center overflow-hidden">
        <CinematicBar
          customClassName={`${
            shouldAnimateCinematic
              ? "ease-in duration-700 blur-2xl"
              : "ease-out duration-700 blur-none"
          } pointer-events-none`}
          animateCinematic={shouldAnimateCinematic}
        />

        <a onClick={() => goToPage("welcome")}
          className={`absolute items-center justify-center w-14 h-14 left-10 flex hover:shadow-lg hover:shadow-secondary/50 hover:contrast-125 rounded-md bg-secondary z-20 ${
            shouldAnimateCinematic
              ? "top-6 opacity-100 ease-in"
              : "top-14 opacity-30 ease-out hover:opacity-100"
          } duration-700`}
        >
          <MagneticHover
            className={"group h-6/5 w-6/5 items-center justify-center flex"}
          >
            <PaperPlaneLogo
              height={"56px"}
              width={"56px"}
            />
          </MagneticHover>
        </a>

        <Tooltip
          content="Change theme"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: -25 },
          }}
          className={"p-1 rounded-md text-accent-2 bg-secondary"}
        >
          <button
            onClick={()=>changeTheme()}
            className={`absolute items-center justify-center w-14 h-14 right-10 flex hover:contrast-125 rounded-md bg-secondary z-20 ${
              shouldAnimateCinematic
                ? "top-6 opacity-100 ease-in"
                : "top-14 opacity-30 ease-out hover:opacity-100"
            } duration-700`}
          >
            <MagneticHover
              className={"group h-6/5 w-6/5 items-center justify-center flex"}
            >
              <div className="rounded-full h-8 w-8 group-hover:w-10 group-hover:h-10 group-hover:shadow-lg group-hover:shadow-lime-400/50 bg-lime-400 z-10 opacity-90"></div>
            </MagneticHover>
          </button>
        </Tooltip>
      </div>

      <Header
        customClassName={`${
          shouldAnimateCinematic
            ? "bg-opacity-80 ease-in duration-700"
            : "bg-opacity-0 ease-out duration-700"
        } hover:bg-opacity-100`}
        customClassHeader={`${
          shouldAnimateCinematic
            ? "top-6 ease-in duration-700"
            : "top-14 ease-out duration-700"
        }`}
      >
        <NavigationMenu
          customClassName={`${
            activePage1
              ? "text-accent-3 bg-black hover:bg-black font-codecr"
              : "hover:bg-white hover:text-accent-1 text-accent-2 font-codecl"
          }`}
          onClick={() => goToPage("welcome")}
        >
          Samuel Torreda
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage2
              ? "text-accent-3 bg-black hover:bg-black font-codecr"
              : "hover:bg-white hover:text-accent-1 text-accent-2 font-codecl"
          } `}
          onClick={() => goToPage("projects")}
        >
          Projects
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage3
              ? "text-accent-3 bg-black hover:bg-black font-codecr"
              : "hover:bg-white hover:text-accent-1 text-accent-2 font-codecl"
          } `}
          onClick={() => goToPage("about")}
        >
          About
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage4
              ? "text-accent-3 bg-black hover:bg-black font-codecr"
              : "hover:bg-white hover:text-accent-1 text-accent-2 font-codecl"
          } `}
          onClick={() => goToPage("skills")}
        >
          Skills
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage5
              ? "text-accent-3 bg-black hover:bg-black font-codecr"
              : "hover:bg-white hover:text-accent-1 text-accent-2 font-codecl"
          } `}
          onClick={() => goToPage("education")}
        >
          Education
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage6
              ? "text-accent-3 bg-black hover:bg-black font-codecr"
              : "hover:bg-white hover:text-accent-1 text-accent-2 font-codecl"
          } `}
          onClick={() => goToPage("contact")}
        >
          Contact
        </NavigationMenu>
      </Header>
    </>
  );
}
