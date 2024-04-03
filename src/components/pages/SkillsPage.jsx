import ContentContainer from "../placeholders/ContentContainer";
import HoverText from "../placeholders/HoverText";
import { useAtom } from "jotai";
import { currentPageAtom, currentSceneAtom } from "../../GlobalState";
import { motion, AnimatePresence } from "framer-motion";

export default function SkillsPage() {
  const [currentScene] = useAtom(currentSceneAtom);

  const showSkillPage = currentScene >= 15 && currentScene <= 16;
  const exitDirection = currentScene >= 16;

  return (
    <>
      <AnimatePresence>
        {showSkillPage && (
          <motion.div
            className="z-10 rounded-b-full bg-black w-full h-full flex items-center justify-center"
            initial={{ y: exitDirection ? "-100vh" : "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: exitDirection ? "-100vh" : "100vh" }}
            transition={{ type: 'spring', damping: 40, stiffness: 300 }}
          >
            <div className="grid grid-cols-2 gap-y-10 gap-x-44 w-10/12 text-accent-5">
              <ContentContainer
                customClassName={`flex flex-col justify-self-end items-end max-w-lg`}
                shouldAnimate
              >
                <div className="w-11/12">
                  <h1 className="font-codech text-5xl text-secondary">
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
                shouldAnimate
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
                shouldAnimate
              >
                <div className="w-11/12">
                  <h1 className="font-codech text-5xl text-secondary">
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
                customClassName={`flex flex-col delay-100 max-w-lg`}
                shouldAnimate
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
