import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { linkedInURL, githubURL, leetcodeURL } from "../data";
const SocialMedia = () => {
    return (<div className='flex gap-5'>
        <a href={linkedInURL} target='_blank'><FaLinkedin className='text-white text-[1.5rem] hover:shadow-[0_0_40px_rgba(255,_112,_184,_1)]' /> </a>
        <a href={githubURL} target='_blank'><FaSquareGithub className='text-white text-[1.5rem] hover:shadow-[0_0_40px_rgba(255,_112,_184,_1)]' /> </a>
        <a href={leetcodeURL} target='_blank'><SiLeetcode className='text-white text-[1.5rem] hover:shadow-[0_0_40px_rgba(255,_112,_184,_1)]' /> </a>
    </div>);
}
export default SocialMedia;