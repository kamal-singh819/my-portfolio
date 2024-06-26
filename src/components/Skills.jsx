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
            I have aquired these skills through Internship and projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="relative bg-gray-800 col-span-1 rounded px-2 pb-1 pt-8" data-aos="fade-up">
              <p className="absolute top-0 text-white">{skill.name}</p>
              <p className="absolute top-0 text-white" style={{ left: `${skill.level - 10}%` }} >{skill.level}%</p>
              <div className="w-[100%] bg-neutral-500 rounded-md flex">
                <span className={`inline-block bg-green-700 h-[1rem] rounded-md`} style={{ width: `${skill.level}%` }}></span>
                <span className={`inline-block flex-1  h-[1rem]`}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}