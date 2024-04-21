import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container flex flex-row items-center justify-between px-3 sm:px-10 py-6">
        <nav className="md:border-l md:border-gray-700 flex items-center justify-center gap-5">
          <a href="#projects" className=" text-white"> Past Work </a>
          <a href="#skills" className=" text-white"> Skills </a>
          <a href="#testimonials" className="hidden sm:block text-white"> Testimonials </a>
        </nav>
        <div className="flex items-center gap-3">
            <a href="#contact" className="text-white bg-gray-800 border-0 focus:outline-none hover:bg-gray-700 rounded"> Hire Me </a>
            <FaArrowRight className="text-white"/>
        </div>
      </div>
    </header>
  );
}