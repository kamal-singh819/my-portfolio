import myPhoto from '../assets/profile.jpg';
export default function About() {
  return (
    <section id="about" className='bg-darkBackground'>
      <div className="container mx-auto flex px-2 sm:px-10 xl:px-40 py-10 md:flex-row flex-col items-center ">
        <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="">
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>Hii, I am <span className='font-bold'> Kamal Singh </span>. </h1>
            <p className='title-font sm:text-3xl text-2xl mb-4 font-medium text-white'>I love to build amazing apps. </p>
          </div>
          <p className="mb-8 leading-relaxed text-white">
            Currently, I am working as a Software Development Engineer in Itobuz Technologies Pvt. Ltd. Kolkata
          </p>
          <div className="flex justify-center gap-2">
            <a
              href="#contact"
              className="text-sm text-white bg-green-500 border-0 py-2 px-3 focus:outline-none hover:bg-green-600 rounded">
              Work With Me
            </a>
            <a
              href="#projects"
              className="text-sm text-gray-400 bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-md"
            alt="hero"
            src={myPhoto}
          />
        </div>
      </div>
    </section>
  );
}