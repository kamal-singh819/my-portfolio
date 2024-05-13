import { FaArrowRight } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { resumeURL } from "../data";
import SocialMedia from "./SocialMedia";

const Navbar = () => {
  return (
    <header className="bg-gray-900 md:sticky top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between px-3 sm:px-10 xl:px-[10rem] py-4">
        <nav className="flex items-center justify-center gap-5">
          <a href="mailto:singh540kamal@gmail.com" target="_blank" className="border-2 border-white rounded-full p-1"> <SiGmail className="text-white" /> </a>
          <SocialMedia />
        </nav>
        <div className="flex items-center gap-3">
          <a href={resumeURL} target="_blank" className="text-white bg-gray-900 border-0 focus:outline-none hover:bg-gray-700 p-2 rounded"> Hire Me <FaArrowRight className="inline-flex text-white ml-2 mb-1" /> </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;