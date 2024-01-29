import { Wireframe } from "@react-three/drei";

export default function WireframeOpt({ strokeOpacity, fillOpacity, thickness }) {
  return (
    <>
      <Wireframe
        squeeze
        squeezeMin={0.2}
        squeezeMax={1}
        fillMix={1}
        fill={"#FFFFF7"}
        fillOpacity={fillOpacity}
        stroke={"#3b3b35"}
        thickness={thickness}
        strokeOpacity={strokeOpacity}
        backfaceStroke={"#3b3b35"}
      />
    </>
  );
}
