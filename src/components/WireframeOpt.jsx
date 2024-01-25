import { Wireframe } from "@react-three/drei";

export default function WireframeOpt({ strokeOpacity, fillOpacity, thickness }) {
  return (
    <>
      <Wireframe
        squeeze
        squeezeMin={0.2}
        squeezeMax={1}
        fillMix={1}
        fill={"#fffaef"}
        fillOpacity={fillOpacity}
        stroke={"#5b4b45"}
        thickness={thickness}
        strokeOpacity={strokeOpacity}
        backfaceStroke={"#dfcbc9"}
      />
    </>
  );
}
