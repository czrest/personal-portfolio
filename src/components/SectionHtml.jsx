import { useScroll, Scroll } from "@react-three/drei";
import { useRef, useEffect, useState, createRef } from "react";
import { useAtom } from "jotai";

import {
  scrollToPageAtom,
  isButtonPressed,
  currentSceneAtom,
  currentPageAtom,
  currentProgressAtom,
} from "../GlobalState";

import SectionContainer from "./placeholders/SectionContainer";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";

const sections = [
  { id: 1, label: "Samuel Torreda" },
  { id: 2, label: "intro1" },
  { id: 3, label: "intro2" },
  { id: 4, label: "About1" },
  { id: 5, label: "About2" },
  { id: 6, label: "Projects1" },
  { id: 7, label: "Projects2" },
  { id: 8, label: "Skills" },
  { id: 9, label: "Education" },
  { id: 10, label: "Contact" },
];

export default function SectionHtml() {
  const scroll = useScroll();

  const [scrollToPage] = useAtom(scrollToPageAtom);
  const [buttonPressed] = useAtom(isButtonPressed);
  const [currentScene] = useAtom(currentSceneAtom);

  const sectionRefs = useRef(Array(sections.length).fill(null));

  useEffect(() => {
    sections.forEach((section, index) => {
      sectionRefs.current[index] = createRef();
    });
  }, []);

  function scrollToSection(id) {
    const sectionIndex = id - 1;
    if (sectionIndex !== -1 && sectionRefs.current[sectionIndex]?.current) {
      const ref = sectionRefs.current[sectionIndex].current;
      scroll.el.scrollTo({
        top: ref.offsetTop * 1.111,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    scrollToSection(scrollToPage);
  }, [buttonPressed]);

  return (
    <>
      <Scroll html>
          {sections.map((section) => (
            <SectionContainer
              key={section.id}
              ref={sectionRefs.current[section.id - 1]}
              customClassName={`h-svh w-screen flex items-center justify-center 
              ${section.id >= 6 && currentScene <= 16 ? "bg-black" : ""} 
              ${section.id === 6 ? "rounded-t-3xl" : ""}`}
              shouldAnimate
            >
              {section.id === 6 && <ProjectPage/>}
              
              {section.id ===8 && <SkillsPage/>}
            </SectionContainer>
          ))}
      </Scroll>
    </>
  );
}
