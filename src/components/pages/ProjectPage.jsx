import ProjectContainer from "../placeholders/ProjectContainer";
import { useAtom } from "jotai";
import { currentPageAtom } from "../../GlobalState";


export default function ProjectPage({}) {

  const [currentPage] = useAtom(currentPageAtom);

  const showProject = currentPage >= 5 && currentPage <= 8;

  return (
    <>
      <div className="h-full w-full lg:px-52 md:px-20 relative items-center flex flex-col">
        <h1 className="font-codech text-secondary text-8xl mt-32">PROJECTS</h1>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="grid gap-4">
            <div>
              <ProjectContainer
                title={`E-waste Manager`}
                technologies={["Java", "Firebase", "Android Studio"]}
                imgsrc={"project-bg-1.png"}
                showProject={showProject}
              />
            </div>
            <div>
              <ProjectContainer
                title={`E-waste Manager`}
                technologies={["Java", "Firebase", "Android Studio"]}
                imgsrc={"project-bg-3.png"}
                showProject={showProject}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <ProjectContainer
                title={`Personal Tour App`}
                technologies={["Java", "Firebase", "Android Studio"]}
                imgsrc={"project-bg-2.png"}
                showProject={showProject}
              />
            </div>
            <div>
              <ProjectContainer
                title={`E-waste Manager`}
                technologies={["Java", "Firebase", "Android Studio"]}
                imgsrc={"project-bg-4.png"}
                showProject={showProject}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
