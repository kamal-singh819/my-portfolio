import SocialMedia from "./SocialMedia";
import { resumeURL } from "../data";
const Footer = () => {
    return (
        <section className="text-gray-400 bg-gray-900">
            <div className="container px-5 py-10 mx-auto text-center lg:px-10 xl:px-40">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex items-center gap-3 py-2">
                        <p>Social Media: </p>
                        <SocialMedia />
                    </div>
                    <div className="flex gap-4">
                        <a href="#about" className="hover:text-white hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">About</a>
                        <a href="#projects" className="hover:text-white hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">Projects</a>
                        <a href="#skills" className="hover:text-white hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">Skills</a>
                        <a href={resumeURL} className="hover:text-white hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]" target="_blank">Resume</a>
                    </div>
                </div>
                <hr />
                <p className="text-sm md:text-md py-2">Copyright © 2024 Kamal Singh. All Rights Reserved.</p>
            </div>
        </section>
    )
}
export default Footer;
