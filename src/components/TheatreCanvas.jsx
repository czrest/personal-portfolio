import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ScrollControls,
  useScroll,
  Float,
  Loader,
  Preload,
} from "@react-three/drei";
import { getProject, val } from "@theatre/core";

import {
  HueSaturation,
  Pixelation,
  Outline,
  Bloom,
  DepthOfField,
  EffectComposer,
  GodRays,
  Sepia,
  Noise,
  DotScreen,
  Vignette,
  ChromaticAberration,
  BrightnessContrast,
  N8AO,
  TiltShift2,
  SMAA,
  SSAO,
  Autofocus,
  ColorAverage,
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize, Resolution } from "postprocessing";

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
} from "../GlobalState";

import Paper from "../modelcomps/Plane";
import SectionHtml from "./SectionHtml";
import PaperWorld from "../modelcomps/Paperworld";
import paperAnimation from "../paperAnimation.json";

export default function TheatreCanvas() {
  const sheet = getProject("Project Animation", {
    state: paperAnimation,
  }).sheet("Scene");

  const [currentScene] = useAtom(currentSceneAtom);

  const shouldAnimateScene1 = currentScene === 1;

  return (
    <>
      <Canvas gl={{ preserveDrawingBuffer: true }} shadows>
        <Suspense fallback={null}>
          <ScrollControls
            pages={8}
            distance={1.5}
            damping={0.5}
            maxSpeed={0.8}
            horizontal
          >
            <SectionHtml />
            <SheetProvider sheet={sheet}>
              <Scene />

              <EffectComposer disableNormalPass multisampling={4}>
                {/* <Bloom
                  luminanceThreshold={0.7}
                  luminanceSmoothing={1.55}
                  height={300}
                /> */}
                <TiltShift2 blur={0.05} />
              </EffectComposer>

              <Preload all />
            </SheetProvider>
          </ScrollControls>
        </Suspense>
      </Canvas>
      {/* <Loader /> */}
    </>
  );
}

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [currentScene, setCurrentScene] = useAtom(currentSceneAtom);

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
    // console.log("Current Scene: ", currentScene);
  }, [currentScene]);

  return (
    <>
      <color attach="background" args={["#fffaef"]} />
      <Environment
        background={false}
        files="kloofendal_38d_partly_cloudy_puresky_4k.hdr"
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
      {/* <SpotlightWithHelper theatreKey='spot light 1' position={[0,0,0]} intensity={1} showHelper={true} /> */}

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
