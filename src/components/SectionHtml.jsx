import { useScroll, Scroll } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useAtom } from "jotai";

import {
  scrollToPageAtom,
  isButtonPressed,
  currentSceneAtom,
  currentPageAtom,
  currentProgressAtom,
} from "../GlobalState";
import ContentContainer from "./placeholders/ContentContainer";
import HoverText from "./placeholders/HoverText";
import ChipsText from "./placeholders/ChipsText";
import Project from "./placeholders/Project";

export default function SectionHtml() {
  const scroll = useScroll();

  const [scrollToPage] = useAtom(scrollToPageAtom);
  const [buttomPressed] = useAtom(isButtonPressed);

  const [currentScene] = useAtom(currentSceneAtom);
  const [currentPage] = useAtom(currentPageAtom);
  const [currentProgress] = useAtom(currentProgressAtom);

  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (projectName) => {
    setHoveredProject(projectName);
  };

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
  const showProjects = currentPage >= 4 && currentPage <= 6;
  const blackScreen = currentScene >= 9 && currentScene <= 10;
  const showProject1 = currentProgress <= 52 && currentProgress >= 32;

  useEffect(() => {
    setHoveredProject(null);
  }, [showProjects]);

  return (
    <>
      <Scroll html>
        <div className={`flex flex-row cursor-default`}>
          <section
            ref={sections.welcome}
            className="w-screen h-screen grid grid-flow-col gap-4 justify-items-stretch content-center"
          ></section>
          <section className="w-screen h-screen relative flex flex-col justify-center items-center"></section>
          <section className="w-screen h-screen relative flex flex-col justify-center items-center"></section>
          <section
            ref={sections.about}
            className="w-screen h-screen flex justify-center items-center "
          >
            <ContentContainer
              customClassName="flex justify-center"
              shouldAnimate
            >
              about
            </ContentContainer>
          </section>
          <div className="bg-black flex ">
            <section
              ref={sections.projects}
              className="w-screen h-screen flex items-center justify-center py-40 px-10"
            >
              {/* <div className="flex flex-col mr-32">
                <h1 className="font-codecl text-accent-5 mb-10">Projects</h1>
                <h2 className="font-codecb text-accent-5 text-xl">This is a test</h2>
              </div> */}
              <div className="flex flex-col">
                {showProjects && (
                  <div className="grid grid-cols-2 mb-5 gap-5 w-fit">
                    <Project
                      title={"E-Waste Manager Android"}
                      technologies={["Java", "Firebase", "Android Studio"]}
                      imgsrc={"./E-wasteManager.png"}
                      showProject={showProject1}
                      customClassName={""}
                    />

                    <Project
                      title={"Personal Tour App Android"}
                      technologies={["Java", "Firebase", "Android Studio"]}
                      imgsrc={"./PersonalTour.png"}
                      showProject={showProject1}
                      customClassName={""}
                    />
                  </div>
                )}

                {showProjects && (
                  <div className="grid grid-cols-2 ml-48 gap-5 w-fit">
                    <Project
                      title={"E-Waste Manager Android"}
                      technologies={["Java", "Firebase", "Android Studio"]}
                      imgsrc={"./E-wasteManager.png"}
                      showProject={showProject1}
                      customClassName={""}
                    />

                    <Project
                      title={"Personal Tour App Android"}
                      technologies={["Java", "Firebase", "Android Studio"]}
                      imgsrc={"./PersonalTour.png"}
                      showProject={showProject1}
                      customClassName={""}
                    />
                  </div>
                )}
              </div>
            </section>
            <section
              ref={sections.skills}
              className="w-screen h-screen py-40 px-10 z-50 flex items-center justify-center"
            >
              <div className="grid grid-cols-2 gap-y-10 gap-x-44 w-10/12 text-accent-5">
                <ContentContainer
                  customClassName={`flex flex-col justify-self-end items-end max-w-lg`}
                  shouldAnimate={shouldAnimateSkills1}
                >
                  <div className="w-11/12">
                    <h1 className="font-codecr text-5xl text-accent-3">
                      What I can do.
                    </h1>
                    <p className="whitespace-pre-line font-codecl text-lg">
                      I specialize in design and web-related aspects, aiming to
                      provide a unique and uplifting digital experience.
                    </p>
                  </div>
                </ContentContainer>

                <ContentContainer
                  customClassName={`flex flex-col max-w-lg`}
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
                  customClassName={`flex flex-col delay-100 justify-self-end items-end max-w-lg`}
                  shouldAnimate={shouldAnimateSkills1}
                >
                  <div className="w-11/12">
                    <h1 className=" font-codecr text-5xl text-accent-3">
                      My tools.
                    </h1>
                    <p className="whitespace-pre-line font-codecl text-lg">
                      These are the instruments that drive my creative process.
                      I always explore emerging technologies, constantly seeking
                      opportunities to expand my skill set and elevate the
                      quality of my work.
                    </p>
                  </div>
                </ContentContainer>

                <ContentContainer
                  customClassName={`flex flex-col delay-100 max-w-lg`}
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
          </div>
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
