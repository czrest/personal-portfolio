import { Wireframe } from "@react-three/drei";
import { THEME } from "../data";
import { dataThemeAtom } from "../GlobalState";
import { useAtom } from "jotai";

export default function WireframeOpt({ strokeOpacity, fillOpacity, thickness }) {
  const [dataTheme] = useAtom(dataThemeAtom);

  return (
    <>
      <Wireframe
        squeeze
        squeezeMin={0.2}
        squeezeMax={1}
        fillMix={1}
        fill={THEME[dataTheme].planeprimary}
        fillOpacity={fillOpacity}
        stroke={THEME[dataTheme].planesecondary}
        thickness={thickness}
        strokeOpacity={strokeOpacity}
        backfaceStroke={THEME[dataTheme].planesecondary}
      />
    </>
  );
}
