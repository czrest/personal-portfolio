import ChipsText from "./ChipsText";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Plus from "../../icons/plus";
import { useMediaQuery } from "@react-hook/media-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
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
  title,
  imgsrc,
  bgsrc,
  showProject = false,
  customClassName,
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
    setOpen(!open);
    console.log(open);
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
        <Dialog
          open={open}
          handler={handleClick}
          size="xxl"
          className="bg-black h-[42rem] overflow-scroll"
        >
          <DialogHeader>
            <h1 className="font-codech text-secondary text-8xl">{title}</h1>
          </DialogHeader>
          <DialogBody>
            <IconButton
              className="fixed bottom-10 right-10"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faXmark} />
            </IconButton>
            <img
              alt="nature"
              className="h-[48rem] w-full rounded-lg object-cover object-center"
              src={`${isSmallScreen ? imgsrc + ".png" : imgsrc + "Banner.png"}`}
            />
            <img
              alt="nature"
              className="h-[48rem] w-full rounded-lg object-cover object-center"
              src={`${isSmallScreen ? imgsrc + ".png" : imgsrc + "Banner.png"}`}
            />
            <img
              alt="nature"
              className="h-[48rem] w-full rounded-lg object-cover object-center"
              src={`${isSmallScreen ? imgsrc + ".png" : imgsrc + "Banner.png"}`}
            />
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="blue-gray" onClick={handleClick}>
              cancel
            </Button>
            <Button variant="gradient" color="green" onClick={handleClick}>
              confirm
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}
