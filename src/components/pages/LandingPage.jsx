import { currentSceneAtom, currentProgressAtom } from "../../GlobalState";
import { useAtom } from "jotai";

import { TypeAnimation } from "react-type-animation";

import Lottie from "lottie-react";
import animationData from "../../icons/scrollLottie.json";
import { useEffect, useRef, useState } from "react";

export default function LandingPage() {
  const [currentScene] = useAtom(currentSceneAtom);
  const [currentProgress] = useAtom(currentProgressAtom);
  const shouldAnimateContact = currentScene === 1;

  const [opacity, setOpacity] = useState(1);

  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef) {
      lottieRef.current.setSpeed(0.5);
    }
  }, [lottieRef]);

  useEffect(() => {
    setOpacity((currentProgress - 95) / 5);
  }, [currentProgress]);

  return (
    <>
      <div
        className="pointer-events-none absolute z-10 text-accent-1 w-screen h-screen flex flex-col justify-center items-center"
        style={{ opacity: opacity }}
      >
        <div className="absolute flex bottom-10 left-10">
          <h2 className="whitespace-pre font-codecl text-xl">Scroll</h2>
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="h-1 self-end mb-2"
          />
        </div>

        <div className="flex flex-col ">
          <h1 className="font-codech text-8xl text-accent-4">
            Hi, I'm <span className="text-accent-3 font-codecb">Sam</span>
          </h1>
          <h2 className="font-codecl text-xl text-accent-4">
            Web Developer | Designer
          </h2>
          <p className="whitespace-pre text-xl font-codecl text-accent-4">
            Bringing <TypeAnimation sequence={[ "IDEAS", 5000, "INNOVATION", 5000, "CREATIVITY", 5000, "IMAGINATION", 5000, ]} wrapper="span" cursor={false} speed={15} repeat={Infinity} className="text-accent-3 font-codecb"/> to life!
          </p>
        </div>
      </div>
    </>
  );
}
