import ChipsText from "./ChipsText";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Plus from "../../icons/plus";

export default function ProjectContainer({
  technologies,
  title,
  imgsrc,
  showProject = false,
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
        className={`overflow-hidden cursor-none ${customClassName} h-auto 2xl:max-w-2xl xl:max-w-xl lg:max-w-full rounded-lg object-cover object-center flex flex-col group backdrop-blur-sm duration-500 hover:bg-secondary/20 hover:shadow-xl hover:shadow-secondary/10 ease-in-out  ${
          showProject ? "opacity-100" : " opacity-0 pointer-events-none"
        } `}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
      >
        <img className="xl:h-auto xl:w-full sm:h-56 h-20 w-full object-none group-hover:blur-sm duration-500" src={imgsrc} alt="Project image" />
        <div className="flex flex-col p-5 w-full h-full">
          <h1 className="text-lg font-codecb text-accent-5 m-2">{title}</h1>
          <div className="flex flex-row">
            {technologies.map((tech, index) => (
              <ChipsText key={index} value={tech} />
            ))}
          </div>
          <motion.div
            className="h-2 w-2 invisible xl:visible opacity-90 rounded-full absolute bottom-5 right-5 group-hover:h-32 group-hover:w-32 group-hover:shadow-lg group-hover:shadow-accent-3/50 duration-300 ease-out"
            ref={ref}
            animate={{ x, y }}
            transition={{
              stiffness: 150,
              damping: 10,
              mass: 0.1,
            }}
          >
            <Plus
              className={`bg-accent-3 rounded-full duration-300 group-hover:bg-transparent fill-accent-3`}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
