import { experience } from "../data";
const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900 text-gray-400">
      <div className="container px-5 md:px-10 lg:px-20 xl:px-40 py-10 mx-auto flex flex-col gap-7">
        <div className="mb-7">
          <h1 className=" text-center sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Experience
          </h1>
          <p className="text-center lg:w-2/3 mx-auto leading-relaxed text-base">
            This is my experience I have gained in my B.E. Currently working as Software Development Engineer Intern
          </p>
        </div>
        {experience.map((exp, idx) => {
          return <div key={exp.companyName} data-aos={`${idx%2 ? "fade-right" : "fade-left"}`}>
            <div className="flex justify-between gap-2 items-center">
              <h3 className="text-white text-md sm:text-lg font-bold">{exp.companyName}</h3>
              <p className="text-sm italic">{exp.duration}</p>
            </div>
            <p className="text-sm italic text-white mb-4">{exp.role}({exp.type})</p>
            <ul className="ml-4 flex flex-col gap-2 list-disc">
              {exp.content.map((con, idx) => <li key={idx} className="text-sm sm:text-md">{con}</li>)}
            </ul>
            {exp.links.Certificate ? <a className="underline text-blue-700" href={exp.links.Certificate}>Certificate</a> : <a className="underline text-blue-700" href={exp.links.Github}>Github</a>}
          </div>
        }) }
      </div>
    </section>
  )
}

export default Experience;
