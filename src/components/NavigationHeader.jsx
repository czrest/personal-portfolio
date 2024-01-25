import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import { useAtom } from "jotai";

import { currentPageAtom, currentSceneAtom, scrollToPageAtom, isButtonPressed } from "../GlobalState";
import CinematicBar from "./CinematicBar";

export default function NavigationHeader() {
  const [currentScene] = useAtom(currentSceneAtom);
  const [currentPage] = useAtom(currentPageAtom);

  const [scrollToPage, setScrollToPage] = useAtom(scrollToPageAtom);
  const [buttonPressed, setButtonPressed] = useAtom(isButtonPressed);

  function goToPage(selectedPage){
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
      <Header
        customClassName={`${shouldAnimateCinematic ? "bg-opacity-70 ease-in duration-700" : "bg-opacity-0 ease-out duration-700"}`}
        customClassHeader={`${shouldAnimateCinematic ? "top-6 ease-in duration-700" : "top-14 ease-out duration-700"}`}
      >
        <NavigationMenu
          customClassName={`${
            activePage1
              ? "active2 text-yellow-400 bg-black hover:bg-black"
              : "hover:bg-white hover:text-black text-white"
          } font-codecl`}
          onClick={() => goToPage("welcome")}
        >
          Samuel Torreda
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage2
              ? "active2 text-yellow-400 bg-black hover:bg-black"
              : "hover:bg-white hover:text-black text-white"
          } `}
          onClick={() => goToPage("projects")}
        >
          Projects
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage3
              ? "active2 text-yellow-400 bg-black hover:bg-black"
              : "hover:bg-white hover:text-black text-white"
          } `}
          onClick={() => goToPage("about")}
        >
          About
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage4
              ? "active2 text-yellow-400 bg-black hover:bg-black"
              : "hover:bg-white hover:text-black text-white"
          } `}
          onClick={() => goToPage("skills")}
        >
          Skills
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage5
              ? "active2 text-yellow-400 bg-black hover:bg-black"
              : "hover:bg-white hover:text-black text-white"
          } `}
          onClick={() => goToPage("education")}
        >
          Education
        </NavigationMenu>
        <NavigationMenu
          customClassName={`${
            activePage6
              ? "active2 text-yellow-400 bg-black hover:bg-black"
              : "hover:bg-white hover:text-black text-white"
          } `}
          onClick={() => goToPage("contact")}
        >
          Contact
        </NavigationMenu>
      </Header>
    </>
  );
}
