import { LuBadgeCheck } from "react-icons/lu";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-darkBackground">
      <div className="container px-5 md:px-10 lg:px-20 xl:px-40  py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-neutral-400">
            I have aquired these skills through Internship and projects throughout my B.E journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
          {skills.map((skill) => (
              <div key={skill.name} className="bg-gray-800 col-span-1 rounded flex p-4 px-10 items-center" data-aos="zoom-in-right">
                <LuBadgeCheck className={`${skill.level=== "Expert" ? "text-green-500" : "text-green-200"} w-6 h-6 flex-shrink-0 mr-4`}/>
                <span className="title-font font-medium text-white">
                  {skill.name} <p className="text-xs text-neutral-500">{skill.level}</p>
                </span>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}