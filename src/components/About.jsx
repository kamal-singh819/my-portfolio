import myPhoto from '../assets/profile2.png';
import SocialMedia from './SocialMedia';

const About = () => {
  return (
    <section id="about" className='bg-gray-800'>
      <div className="container mx-auto flex px-2 sm:px-10 xl:px-40 py-10 md:flex-row flex-col-reverse items-center ">
        <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" data-aos="fade-up">
          <div className="">
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>Hii, I am <span className='font-bold'> Kamal Singh </span> </h1>
            <p className='title-font text-2xl mb-4 font-medium text-white'>I am a Full Stack Developer </p>
          </div>
          <p className="mb-8 leading-relaxed text-white italic">
            I`m a skilled Problem Solver and Software Developer with 2+ years of experience in full-stack development. I build scalable backend systems and modern applications using Node.js, Spring Boot, React and React Native.
          </p>
          <div className="flex justify-center gap-2 mb-4">
            <a
              href="#experience"
              className="text-sm lg:text-md text-white font-bold bg-green-500 border-0 py-2 px-3 focus:outline-none hover:bg-green-600 rounded">
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm lg:text-md text-gray-400 font-bold bg-gray-700 border-0 py-2 px-3 focus:outline-none hover:bg-gray-600 hover:text-white rounded">
              See My Work
            </a>
          </div>
          <SocialMedia />
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-2 sm:p-5 xl:p-10" data-aos="fade-up">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src={myPhoto}
          />
        </div>
      </div>
    </section>
  );
}
export default About;