import { currentSceneAtom, currentProgressAtom } from "../../GlobalState";
import { useAtom } from "jotai";

import { TypeAnimation } from "react-type-animation";

import Lottie from "lottie-react";
import animationData from "../../icons/scrollLottie.json";
import { useEffect, useRef, useState } from "react";
import ContentContainer from "../placeholders/ContentContainer";

export default function LandingPage() {
  const [currentScene] = useAtom(currentSceneAtom);
  // const [currentProgress] = useAtom(currentProgressAtom);

  // const shouldAnimateLandingPage = currentScene >= 1;

  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef) {
      lottieRef.current.setSpeed(0.5);
    }
  }, [lottieRef]);

  return (
    <>
      <ContentContainer
        customClassName={`pointer-events-none absolute z-10 text-accent-1 w-screen h-screen grid grid-cols-2 gap-x-32 px-10 py-28 items-center`}
        shouldAnimate={true}
      >
        <div className="flex flex-col z-10 max-w-xl justify-self-end">
          <h1 className="font-codech text-8xl text-accent-4">
            Hi, I'm <span className="text-accent-3 font-codecb">Sam</span>.
          </h1>
          <h2 className="font-codecl text-3xl text-accent-4">
            Web Developer | Designer
          </h2>
          <p className="whitespace-pre text-xl font-codecl text-accent-4 mt-10">
            Let's bring{" "}
            <TypeAnimation
              sequence={[
                "IDEAS",
                5000,
                "INNOVATION",
                5000,
                "CREATIVITY",
                5000,
                "IMAGINATION",
                5000,
              ]}
              wrapper="span"
              cursor={false}
              speed={15}
              repeat={Infinity}
              className="text-accent-3 font-codecb"
            />{" "}
            to life!
          </p>
        </div>
        
        {/* <img src="./portrait.png" alt="profile img" className="rounded-bl-full w-full h-auto relative max-w-xl"></img> */}

        <div className="absolute flex bottom-10 left-10">
          <h2 className="whitespace-pre text-accent-4 font-codecl text-xl">Scroll</h2>
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="h-1 self-end mb-2"
          />
        </div>
      </ContentContainer>
    </>
  );
}
