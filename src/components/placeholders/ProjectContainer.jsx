import ChipsText from "./ChipsText";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Plus from "../../icons/plus";
import { useMediaQuery } from "@react-hook/media-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "../../data";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";

export default function ProjectContainer({
  technologies,
  project,
  imgsrc,
  bgsrc,
  customClassName,
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [projectData, setProjectData] = useState();
  const [open, setOpen] = useState(false);
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

  const handleClick = () => {
    setProjectData(project);
    setOpen((prevVal) => !prevVal);
  };

  const isSmallScreen = useMediaQuery("(min-width: 1140px)");

  return (
    <>
      <div
        className={`overflow-hidden cursor-none ${customClassName} h-auto 2xl:max-w-2xl xl:max-w-xl lg:max-w-full rounded-lg object-cover object-center flex flex-col group backdrop-blur-sm duration-500 hover:bg-secondary/20 hover:shadow-xl hover:shadow-secondary/10 ease-in-out`}
        onClick={handleClick}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
      >
        <div className="w-full h-full relative flex items-center justify-center">
          <img
            className="xl:h-auto xl:w-full sm:h-56 h-20 w-full object-none group-hover:blur-sm duration-500"
            src={bgsrc}
            alt="Project background"
          />
          <img
            className={`absolute w-full h-full 2xl:px-10 xl:px-10  2xl:object-contain xl:object-contain object-fill 2xl:group-hover:px-5 xl:group-hover:px-5 duration-500`}
            src={`${isSmallScreen ? imgsrc + ".png" : imgsrc + "Banner.png"}`}
            alt="Project thumbnail"
          />
        </div>
        <div className="flex flex-col p-5 w-full h-full">
          <h1 className="text-lg font-codecb text-accent-5 m-2"></h1>
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
      {projectData && (
        <Dialog
          open={open}
          handler={handleClick}
          size="xxl"
          className="bg-black h-[42rem] overflow-scroll"
        >
          <DialogHeader>
            <img
              alt="nature"
              className="h-auto w-full rounded-lg object-cover object-center"
              src={PROJECTS[projectData].coverImage}
            />
          </DialogHeader>
          <DialogBody>
            <h1 className="font-codech text-secondary text-8xl py-5 mb-10 border-b border-secondary">
              {PROJECTS[projectData].title}
            </h1>
            <div className={`grid grid-cols-2 gap-28`}>
              <div className="flex flex-col">
                <h2 className="font-codecb text-secondary text-md uppercase">
                  Description
                </h2>
                <p className="text-xl font-codech">
                  {PROJECTS[projectData].description}
                </p>
              </div>
              <div className="grid grid-flow-row-dense gap-5">
                <div>
                  <h2 className="font-codecb text-secondary text-md uppercase">Role</h2>
                  {PROJECTS[projectData].role.map((roles, index) => (
                    <p className="text-xl font-codech" key={index}>{roles}</p>
                  ))}
                </div>
                <div>
                  <h2 className="font-codecb text-secondary text-md uppercase">Technologies</h2>
                  {PROJECTS[projectData].technologies.map((tech, index) => (
                    <p className="text-xl font-codech" key={index}>{tech}</p>
                  ))}
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter className="fixed bottom-0 p-10 w-full pointer-events-none">
            <IconButton
              size="lg"
              onClick={handleClick}
              className="bg-tertiary duration-500 group pointer-events-auto"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-white text-3xl group-hover:rotate-180 duration-300"
              />
            </IconButton>
          </DialogFooter>
        </Dialog>
      )}
    </>
  );
}
