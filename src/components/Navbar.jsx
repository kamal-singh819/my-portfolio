import { FaArrowRight } from "react-icons/fa";
import { resumeURL } from "../data";

const Navbar = () => {
  return (
    <header className="bg-gray-900 md:sticky top-0 z-10">
      <div className="container flex flex-row items-center justify-between px-3 sm:px-10 py-6">
        <nav className="flex items-center justify-center gap-5">
          <a href="#projects" className=" text-white"> Past Work </a>
          <a href="#skills" className=" text-white"> Skills </a>
          <a href="#blog" className="hidden sm:block text-white"> Blog </a>
        </nav>
        <div className="flex items-center gap-3">
            <a href={resumeURL} target="_blank" className="text-white bg-gray-900 border-0 focus:outline-none hover:bg-gray-700 rounded"> Hire Me <FaArrowRight className="inline-flex text-white ml-2 mb-1"/> </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;