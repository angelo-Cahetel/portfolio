import { useState } from "react";
import { createPortal } from "react-dom";
import { PROJECTS } from "../constants";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (event) => {
    setMousePosition({
      x: event.clientX + 24,
      y: Math.max(16, event.clientY - 260),
    });
  };

  const handleMouseEnter = (project) => (event) => {
    setHoveredProject(project);
    updateMousePosition(event);
  };

  const handleMouseMove = (event) => {
    updateMousePosition(event);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <section
      id="projects"
      className="flex w-full min-h-screen p-3 md:p-6 sticky"
    >
      <div className="bg-white rounded-2xl flex flex-col w-full p-6 md:p-12 lg:p-20">
        <div className="justify-center">
          <h1 className="text-royalBlue text-end text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium font-instrument italic">
            Projects
          </h1>
        </div>
        <div className="mt-5">
          <ul className="space-y-7">
            {PROJECTS.map((project) => (
              <li key={project.id}>
                <button
                  type="button"
                  onMouseEnter={handleMouseEnter(project)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={() =>
                    window.open(
                      project.githubLink,
                      "_blank",
                      "noonpener,noreferrer",
                    )
                  }
                  className={`w-full text-left text-3xl md:text-5xl lg:text-8xl font-instrument italic transition-colors transition-discrete duration-300 border-4 border-grayBlue hover:border-royalBlue py-2 px-8 rounded-2xl ${hoveredProject?.id === project.id
                      ? "text-royalBlue "
                      : "text-grayBlue"
                    }`}
                >
                  {project.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {hoveredProject
          ? createPortal(
              <div
                className="hidden lg:block fixed z-50 pointer-events-none"
                style={{ left: mousePosition.x, top: mousePosition.y }}
              >
                <div className="w-90">
                  <ProjectCard {...hoveredProject} />
                </div>
              </div>,
              document.body,
            )
          : null}
      </div>
    </section>
  );
}

export default Projects;
