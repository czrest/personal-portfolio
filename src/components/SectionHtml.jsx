import { useScroll, Scroll } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useAtom } from "jotai";

import CinematicBar from "./CinematicBar";

import {
  scrollToPageAtom,
  isButtonPressed,
  currentSceneAtom,
  currentPageAtom,
} from "../GlobalState";
import ContentContainer from "./ContentContainer";
import HoverText from "./HoverText";

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
      left: ref?.current?.offsetLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToRef(sections[scrollToPage]);
  }, [scrollToPage, buttomPressed]);

  const shouldAnimateSkills1 = currentScene >= 11 && currentScene <= 12;
  const shouldAnimateSkills2 = currentScene >= 12 && currentScene <= 13;

  return (
    <>
      <Scroll html>
        <div className="flex flex-row cursor-default">
          <section
            ref={sections.welcome}
            className="w-screen h-screen grid grid-flow-col gap-4 justify-items-stretch content-center"
          ></section>
          <section className="w-screen h-screen relative flex flex-col justify-center items-center"></section>
          <section className="w-screen h-screen relative flex flex-col justify-center items-center"></section>
          <section
            ref={sections.projects}
            className="w-screen h-screen grid grid-flow-col gap-4 justify-items-stretch content-center"
          >
            <ContentContainer
              customClassName="flex justify-center"
              shouldAnimate
            >
              project
            </ContentContainer>
          </section>
          <section
            ref={sections.about}
            className="w-screen h-screen grid grid-flow-col gap-4 justify-items-stretch content-center"
          >
            <ContentContainer
              customClassName="flex justify-center"
              shouldAnimate
            >
              about
            </ContentContainer>
          </section>
          <section
            ref={sections.skills}
            className="w-screen h-screen py-40 px-10 bg-black text-white z-50 flex items-center justify-center"
          >
            <div className="grid grid-cols-2 gap-y-10 gap-x-44 w-10/12 text-white bg-black">
              <ContentContainer
                customClassName={`flex flex-col items-start `}
                shouldAnimate={shouldAnimateSkills1}
              >
                <div className="w-11/12">
                  <h1 className="font-codecr text-5xl text-lime-400">
                    What I can do.
                  </h1>
                  <p className="whitespace-pre-line font-codecl text-lg">
                    I specialize in design and web-related aspects, aiming to
                    provide a unique and uplifting digital experience.
                  </p>
                </div>
              </ContentContainer>

              <ContentContainer
                customClassName={`flex flex-col items-end`}
                shouldAnimate={shouldAnimateSkills2}
              >
                <div className="w-11/12">
                  <HoverText>Web Development</HoverText>
                  <HoverText>Web Design</HoverText>
                  <HoverText>UI/UX Design</HoverText>
                  <HoverText>Digital Editing</HoverText>
                </div>
              </ContentContainer>

              <ContentContainer
                customClassName={`flex flex-col delay-100 items-start`}
                shouldAnimate={shouldAnimateSkills1}
              >
                <div className="w-11/12">
                  <h1 className=" font-codecr text-5xl text-lime-400">
                    My tools.
                  </h1>
                  <p className="whitespace-pre-line font-codecl text-lg">
                    These are the instruments that drive my creative process. I
                    always explore emerging technologies, constantly seeking
                    opportunities to expand my skill set and elevate the quality
                    of my work.
                  </p>
                </div>
              </ContentContainer>

              <ContentContainer
                customClassName={`flex flex-col delay-100 items-end`}
                shouldAnimate={shouldAnimateSkills2}
              >
                <div className="w-11/12 flex flex-row">
                  <div>
                    <HoverText>HTML</HoverText>
                    <HoverText>CSS</HoverText>
                    <HoverText>Javascript</HoverText>
                    <HoverText>React</HoverText>
                  </div>
                  <div>
                    <HoverText>Photoshop</HoverText>
                    <HoverText>Illustrator</HoverText>
                    <HoverText>Blender</HoverText>
                    <HoverText>VS Code</HoverText>
                  </div>
                </div>
              </ContentContainer>
            </div>
          </section>
          <section
            ref={sections.education}
            className="w-screen h-screen grid grid-flow-col gap-4 justify-items-stretch content-center"
          >
            <ContentContainer
              customClassName="flex justify-center"
              shouldAnimate
            >
              education
            </ContentContainer>
          </section>
          <section
            ref={sections.contact}
            className="w-screen h-screen grid grid-flow-col gap-4 justify-items-stretch content-center"
          ></section>
        </div>
      </Scroll>
    </>
  );
}
