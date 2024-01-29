import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import { useAtom } from "jotai";

import {
  currentPageAtom,
  currentSceneAtom,
  scrollToPageAtom,
  isButtonPressed,
} from "../GlobalState";
import CinematicBar from "./CinematicBar";

import PaperPlaneLogo from "../icons/paperplanelogo";
import MagneticHover from "./MagneticHover";

export default function NavigationHeader() {
  const [currentScene] = useAtom(currentSceneAtom);
  const [currentPage] = useAtom(currentPageAtom);

  const [scrollToPage, setScrollToPage] = useAtom(scrollToPageAtom);
  const [buttonPressed, setButtonPressed] = useAtom(isButtonPressed);

  function goToPage(selectedPage) {
    setScrollToPage(selectedPage);
    setButtonPressed((prev) => !prev);
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

        <div
          className={`absolute left-10 z-20 ${
            shouldAnimateCinematic
              ? "top-6 opacity-100 ease-in"
              : "top-14 opacity-30 ease-out"
          } duration-700`}
        >
          <PaperPlaneLogo
            height={"56px"}
            width={"56px"}
            className={"rounded-md bg-secondary"}
          />
        </div>

        <div
          className={`absolute w-14 h-14 right-10 flex rounded-md bg-secondary z-20 ${
            shouldAnimateCinematic
              ? "top-6 opacity-100 ease-in"
              : "top-14 opacity-30 ease-out"
          } duration-700`}
        >
          <MagneticHover className={"h-full w-full items-center justify-center flex"}>
            <div className="rounded-full h-4/6 w-4/6 bg-lime-500 z-10"></div>
          </MagneticHover>
        </div>
      </div>

      <Header
        customClassName={`${
          shouldAnimateCinematic
            ? "bg-opacity-80 ease-in duration-700"
            : "bg-opacity-0 ease-out duration-700"
        }`}
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
