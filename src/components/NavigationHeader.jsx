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
      </div>
      <Header
        customClassName={`${
          shouldAnimateCinematic
            ? "bg-opacity-70 ease-in duration-700"
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
              ? "text-lime-400 bg-black hover:bg-black font-codecl"
              : "hover:bg-white hover:text-black text-white font-codecr"
          }`}
          onClick={() => goToPage("welcome")}
        >
          Samuel Torreda
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage2
              ? "text-lime-400 bg-black hover:bg-black font-codecl"
              : "hover:bg-white hover:text-black text-white font-codecr"
          } `}
          onClick={() => goToPage("projects")}
        >
          Projects
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage3
              ? "text-lime-400 bg-black hover:bg-black font-codecl"
              : "hover:bg-white hover:text-black text-white font-codecr"
          } `}
          onClick={() => goToPage("about")}
        >
          About
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage4
              ? "text-lime-400 bg-black hover:bg-black font-codecl"
              : "hover:bg-white hover:text-black text-white font-codecr"
          } `}
          onClick={() => goToPage("skills")}
        >
          Skills
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage5
              ? "text-lime-400 bg-black hover:bg-black font-codecl"
              : "hover:bg-white hover:text-black text-white font-codecr"
          } `}
          onClick={() => goToPage("education")}
        >
          Education
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage6
              ? "text-lime-400 bg-black hover:bg-black font-codecl"
              : "hover:bg-white hover:text-black text-white font-codecr"
          } `}
          onClick={() => goToPage("contact")}
        >
          Contact
        </NavigationMenu>
      </Header>
    </>
  );
}
