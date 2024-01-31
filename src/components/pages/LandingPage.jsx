import { currentSceneAtom } from "../../GlobalState";
import { useAtom } from "jotai";

import ContentContainer from "../ContentContainer";

import Lottie from "lottie-react";
import animationData from "../../icons/scrollLottie.json";

export default function LandingPage() {
  const [currentScene] = useAtom(currentSceneAtom);
  const shouldAnimateContact = currentScene === 1;

  return (
    <>
      <ContentContainer
        customClassName="pointer-events-none absolute z-10 text-accent-1 w-screen h-screen flex flex-col justify-center items-center"
        shouldAnimate={shouldAnimateContact}
      >
        <div className="absolute flex bottom-10 left-10">
          <h2 className="whitespace-pre font-codecl text-xl">
            Scroll
          </h2>
          <Lottie animationData={animationData} loop={true} autoplay={true} className="h-1 self-end mb-2" speed={0.25}/>
        </div>

        <div className="flex flex-col ">
          <h1 className="font-codech text-8xl text-accent-4">
            Hi, I'm <span className="text-accent-3 font-codecb">Sam</span>
          </h1>
          <h2 className="font-codecl text-xl text-accent-4">
            Web Developer | Designer
          </h2>
        </div>
      </ContentContainer>
    </>
  );
}
