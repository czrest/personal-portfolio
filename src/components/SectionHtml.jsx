import { useScroll, Scroll } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useAtom } from "jotai";

import CinematicBar from "./CinematicBar";

import { scrollToPageAtom, isButtonPressed, currentSceneAtom, currentPageAtom } from "../GlobalState";

export default function SectionHtml() {
  const scroll = useScroll();

  const [scrollToPage] = useAtom(scrollToPageAtom);
  const [buttomPressed] = useAtom(isButtonPressed);

  const [currentScene] = useAtom(currentSceneAtom);
  const [currentPage] = useAtom(currentPageAtom);

  const sections = {
    welcome: useRef(null),
    projects: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };

  const scrollToRef = (ref) => {
      scroll.el.scrollTo({
        left: ref?.current?.offsetLeft * 1.5714,
        behavior: "smooth",
      });
  };

  useEffect(() => {
    scrollToRef(sections[scrollToPage]);
  }, [scrollToPage, buttomPressed]);

  const shouldAnimateCinematic = currentScene >= 16 || currentScene === 1 ;

  return (
    <>
      <Scroll html>
        
        <CinematicBar
          customClassName={`${shouldAnimateCinematic? "ease-in duration-700 blur-2xl":"ease-out duration-700 blur-none"}`}
          animateCinematic={shouldAnimateCinematic}
        />
        <div className=" flex flex-row">
          <section
            ref={sections.welcome}
            className="w-screen h-screen relative flex flex-col justify-center items-center"
          >
            Welcome
          </section>
          <section
            className="w-screen h-screen relative flex flex-col justify-center items-center"
          >
          </section>
          <section
            className="w-screen h-screen relative flex flex-col justify-center items-center"
          >
          </section>
          <section
            ref={sections.projects}
            className="w-screen h-screen relative flex flex-col justify-center items-center"
          >
            Projects
          </section>
          <section
            ref={sections.about}
            className="w-screen h-screen relative flex flex-col justify-center items-center"
          >
            About
          </section>
          <section
            ref={sections.skills}
            className="w-screen h-screen relative flex flex-col justify-center items-center bg-black"
          >
            Skills
          </section>
          <section
            ref={sections.education}
            className="w-screen h-screen relative flex flex-col justify-center items-center"
          >
            Education
          </section>
          <section
            ref={sections.contact}
            className="w-screen h-screen relative flex flex-col justify-center items-center"
          >
            Contact
          </section>
        </div>
      </Scroll>
    </>
  );
}
