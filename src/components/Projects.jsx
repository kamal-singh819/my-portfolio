import { FaCode } from "react-icons/fa";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font z-0">
      <div className="container px-5 py-10 mx-auto text-center lg:px-10 xl:px-40">
        <div className="flex flex-col w-full mb-20">
          <FaCode className="mx-auto inline-block w-[2rem] md:w-[5rem] h-[2rem] md:h-[5rem] mb-4"  />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I have Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are the projects I have developed in my B.E journey. Github Link is associated with each project, you can explore!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {projects.map((project) => (
            <div key={project.title} className="col-span-1 px-8 py-10 z-0 w-full border-4 border-gray-800 bg-gray-900 opacity-100" data-aos="fade-up">
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                {project.subtitle}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {project.title}
              </h1>
              <p className="leading-relaxed mb-4 text-sm">{project.description}</p>
              <p className="text-white text-md">Technology Used: <span className="text-neutral-300"> {project.technologyUsed}</span></p>
              <a href={project.link} target="_blank" className=" underline text-blue-800">Github Link</a>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;