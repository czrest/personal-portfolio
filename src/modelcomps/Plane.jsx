import {
  useGLTF,
  useAnimations,
  Wireframe,
  useScroll,
  Html,
} from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import { useAtom } from "jotai";
import { useFrame } from "@react-three/fiber";

import {
  currentSceneAtom,
  planeLoadedAtom,
  currentPageAtom,
  currentProgressAtom
} from "../GlobalState";
import { useEffect, useState } from "react";
import WireframeOpt from "../components/WireframeOpt";

const Paper = () => {
  const scroll = useScroll();
  const [currentScene] = useAtom(currentSceneAtom);
  const [currentPage] = useAtom(currentPageAtom);
  const [currentProgress] = useAtom(currentProgressAtom);
  const [, setPlaneLoaded] = useAtom(planeLoadedAtom);
  const [strokeOpacity, setStrokeOpacity] = useState(0);
  const [fillOpacity, setFillOpacity] = useState(0);
  const [thickness, setThickness] = useState(0.07);

  const { nodes, materials, animations } = useGLTF("./paperplane.glb");
  const { ref, mixer, names, actions, clips } = useAnimations(animations);

  useEffect(
    () => void (actions.scrolltoplane.reset().play().paused = true),
    []
  );
  useFrame(
    () =>
      (actions.scrolltoplane.time =
        actions.scrolltoplane.getClip().duration * scroll.offset)
  );

  useEffect(() => {
    setPlaneLoaded(true);

    return () => {
      setPlaneLoaded(false);
    };
  }, []);

  const showLines = currentScene >= 2;

  const animateOpacity = (setValue, targetValue, step, minValue) => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        const nextValue = Math.min(Math.max(prevValue + step, minValue), 1);

        if (
          (step > 0 && nextValue >= targetValue) ||
          (step < 0 && nextValue <= targetValue)
        ) {
          clearInterval(interval);
        }

        return nextValue;
      });
    }, 10);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const targetValue = showLines ? 1 : 0;
    const step = showLines ? 0.05 : -0.05;
    return animateOpacity(setStrokeOpacity, targetValue, step, 0);
  }, [currentScene]);

  useEffect(() => {
    const targetValue = !showLines ? 1 : 0.6;
    const step = !showLines ? 0.05 : -0.05;
    const minValue = 0.6;

    if (currentScene >= 7 && currentScene <= 11) {
      setThickness(0.2);
    } else if (currentScene <= 6) {
      setThickness(0.07);
    } else {
      setThickness(1);
    }

    return animateOpacity(setFillOpacity, targetValue, step, minValue);
  }, [currentScene]);

  const showHtml = currentPage >= 2 && currentPage <= 3;
  const showText1 = currentProgress <= 84 && currentProgress >= 80 ;
  const showText2 = currentProgress <= 79 && currentProgress >= 76;

  return (
    <>
      <e.mesh
        ref={ref}
        theatreKey="plane"
        castShadow={true}
        receiveShadow={true}
      >
        <primitive object={nodes.Main} />

        <skinnedMesh
          geometry={nodes.Plane.geometry}
          skeleton={nodes.Plane.skeleton}
        >
          <WireframeOpt
            strokeOpacity={strokeOpacity}
            fillOpacity={fillOpacity}
            thickness={thickness}
          />
        </skinnedMesh>
        {showHtml && (
          <>
            <Html
              distanceFactor={0}
              position={[-5, -1, 6]}
              transform
              portal={{ current: scroll.fixed }}
              sprite
            >
              <p
                className={`font-codecl text-xs border border-accent-1 px-2 ${
                  showText1 ? "opacity-100" : "opacity-0"
                } duration-75 `}
              >
                Hey there!
              </p>
            </Html>
            <Html
              distanceFactor={0}
              position={[-6, 2, -2.5]}
              transform
              portal={{ current: scroll.fixed }}
              sprite
            >
              <p
                className={`font-codecl text-xs border border-accent-1 px-2 ${
                  showText2 ? "opacity-100" : "opacity-0"
                } duration-75 `}
              >
                Hey there!
              </p>
            </Html>
          </>
        )}
      </e.mesh>
    </>
  );
};

export default Paper;
