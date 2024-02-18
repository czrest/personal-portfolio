import ChipsText from "./ChipsText";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Plus from "../../icons/plus";

export default function Project({
  technologies,
  title,
  imgsrc,
  showProject = false,
  active = false,
  onMouseEnter,
  customClassName,
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setMousePosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const { x, y } = mousePosition;

  return (
    <>
      <div
        className={` overflow-hidden cursor-none ${customClassName} w-96 h-56 flex flex-col group rounded-md border border-accent-5 backdrop-blur-sm duration-500 ${
          showProject ? "opacity-100 ease-in" : "ease-out opacity-0"
        } `}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        onMouseOut={reset}
      >
        {/* <div className="col-span-2">
          <img
            src={imgsrc}
            alt={`${title} image`}
            className={`object-cover ${
              active ? " opacity-80 h-32 ease-out" : "h-0 opacity-0 ease-in"
            } w-full rounded-t-3xl contrast-120 group-hover:opacity-100 group-hover:contrast-100`}
          />
        </div> */}
        <div className="flex flex-col p-5 w-full h-full">
          <h1 className="text-lg font-codecb text-accent-5 m-2">{title}</h1>
          <div className="flex flex-row">
            {technologies.map((tech, index) => (
              <ChipsText key={index} value={tech} />
            ))}
          </div>
          <motion.div
            className="h-2 w-2 opacity-90 rounded-full absolute bottom-5 right-5 group-hover:h-20 group-hover:w-20 group-hover:shadow-lg group-hover:shadow-tertiary/50 duration-100 ease-out"
            ref={ref}
            animate={{ x, y }}
            transition={{
              stiffness: 100,
              damping: 0,
              mass: 0.1,
            }}>
              <Plus></Plus>
          </motion.div>
        </div>
      </div>
    </>
  );
}
