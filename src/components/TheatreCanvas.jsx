import { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ScrollControls,
  useScroll,
  Float,
  Preload,
} from "@react-three/drei";
import { getProject, val } from "@theatre/core";

import {
  EffectComposer,
  TiltShift2,
} from "@react-three/postprocessing";

import { Suspense } from "react";

import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
  editable as e,
} from "@theatre/r3f";

import { useAtom } from "jotai";
import {
  currentPageAtom,
  currentSceneAtom,
  planeLoadedAtom,
  dataThemeAtom,
} from "../GlobalState";

import Paper from "../modelcomps/Plane";
import SectionHtml from "./SectionHtml";
import PaperWorld from "../modelcomps/Paperworld";
import paperAnimation from "../paperAnimation.json";
import ContactPage from "./ContactPage";
import { THEME } from "../data";

export default function TheatreCanvas() {
  const sheet = getProject("Project Animation", {
    state: paperAnimation,
  }).sheet("Scene");

  const [currentScene] = useAtom(currentSceneAtom);

  const [planeLoaded] = useAtom(planeLoadedAtom);

  return (
    <>
      {planeLoaded && (
        <>
          <div className="relative">
            <ContactPage/>
          </div>
        </>
      )}
      <Canvas gl={{ preserveDrawingBuffer: true }} shadows>
        <Suspense fallback={null}>
          <ScrollControls
            pages={8}
            distance={1}
            damping={0.5}
            maxSpeed={0.8}
            horizontal
          >
            <SectionHtml />
            <SheetProvider sheet={sheet}>
              <Scene />

              <EffectComposer disableNormalPass multisampling={20}>
                <TiltShift2 blur={0.05} />
              </EffectComposer>

              <Preload all />
            </SheetProvider>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
}

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [currentScene, setCurrentScene] = useAtom(currentSceneAtom);
  const [isDark, setisDark] = useState(null);

  const [dataTheme] = useAtom(dataThemeAtom);

  const sequenceLength = val(sheet.sequence.pointer.length);

  function logCurrentPageCallback(scroll, callback) {
    const currentPage = Math.floor(scroll.offset * scroll.pages) + 1;

    //Determine the current scene based on how far into the page you have scrolled
    const positionWithinPage = (scroll.offset * scroll.pages) % 1;

    //divide page by
    const sceneOffsetForCurrentPage = Math.floor(positionWithinPage * 2) + 1;

    //calculate total scenes
    const computeScene = (currentPage - 1) * 2 + sceneOffsetForCurrentPage;

    // console.log("Current Page: ", currentPage);
    // console.log("Current Scene: ", currentScene);
    callback(currentPage);
    setCurrentScene(computeScene);
  }

  useFrame(() => {
    if (scroll) {
      logCurrentPageCallback(scroll, setCurrentPage);
      sheet.sequence.position = scroll.offset * sequenceLength;
    }
  });

  useEffect(() => {
    if (dataTheme === "darktheme"){
      setisDark(true);
    } else {
      setisDark(false);
    }
  }, [dataTheme]);

  return (
    <>
      <color attach="background" enabled={!isDark} args={[THEME[dataTheme].tertiary]} />
      <Environment
        background={false}
        files="night.hdr"
        castShadow
      />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
        fov={90}
        near={0.1}
        far={70}
      />
      <ambientLight intensity={1} />

      <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={0.01} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.01} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[0, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        enabled={true}
      >
        <Paper />
      </Float>
      <PaperWorld theatreKey="world" />
    </>
  );
};
