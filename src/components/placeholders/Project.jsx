import ContentContainer from "./ContentContainer";
import ChipsText from "./ChipsText";
import { useAtom } from "jotai";

export default function Project({
  technologies,
  title,
  imgsrc,
  showProject = false,
  active = false,
  onMouseEnter,
  customClassName,
}) {
  return (
    <>
      <div
        className={`cursor-pointer ${customClassName} flex flex-col group rounded-3xl max-w-xl h-fit border border-accent-1 backdrop-blur-sm duration-500 hover:bg-primary ${
          showProject ? "opacity-100 ease-in" : "ease-out opacity-0"
        }`}
        onMouseEnter={onMouseEnter}
      >
        <div className="col-span-2">
          <img
            src={imgsrc}
            alt={`${title} image`}
            className={`object-cover ${
              active ? " opacity-80 h-32 ease-out" : "h-0 opacity-0 ease-in"
            } w-full rounded-t-3xl contrast-120 group-hover:opacity-100 group-hover:contrast-100`}
          />
        </div>
        <div className="flex flex-row justify-between items-center p-3">
          <h1 className="text-lg font-codecb text-accent-1 m-2">{title}</h1>
          <div className="flex flex-row">
            {technologies.map((tech, index) => (
              <ChipsText key={index} value={tech} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
