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
                project={`EwasteManager`}
                showProject={showProject}
              />
            </div>
            <div>
              <ProjectContainer
                project={`Journey3D`}
                showProject={showProject}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <ProjectContainer
                project={`PersonalTourApp`}
                showProject={showProject}
              />
            </div>
            <div>
              <ProjectContainer
                project={`FreelanceWorks`}
                showProject={showProject}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
