import ProjectContainer from "../placeholders/ProjectContainer";
import { useAtom } from "jotai";
import { currentPageAtom } from "../../GlobalState";


export default function ProjectPage({}) {

  const [currentPage] = useAtom(currentPageAtom);

  const showProject = currentPage >= 5 && currentPage <= 8;

  return (
    <>
      <div className="h-full w-full 2xl:px-20 xl:px-20 px-5 relative items-center flex flex-col">
        <h1 className="font-codech text-secondary text-8xl mt-32">PROJECTS</h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full 2xl:w-fit">
          <div className="grid gap-4">
            <div>
              <ProjectContainer
                title={`E-waste Manager`}
                technologies={["Java", "Firebase", "Android Studio"]}
                bgsrc={"project-bg-1.png"}
                imgsrc={'E-wasteProject'}
                showProject={showProject}
              />
            </div>
            <div>
              <ProjectContainer
                title={`E-waste Manager`}
                technologies={["Java", "Firebase", "Android Studio"]}
                bgsrc={"project-bg-3.png"}
                imgsrc={''}
                showProject={showProject}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <ProjectContainer
                title={`Personal Tour App`}
                technologies={["Java", "Firebase", "Android Studio"]}
                bgsrc={"project-bg-2.png"}
                imgsrc={'TourAppProject'}
                showProject={showProject}
              />
            </div>
            <div>
              <ProjectContainer
                title={`E-waste Manager`}
                technologies={["Java", "Firebase", "Android Studio"]}
                bgsrc={"project-bg-4.png"}
                imgsrc={''}
                showProject={showProject}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
