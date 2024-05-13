import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { linkedInURL, githubURL, leetcodeURL } from "../data";
const SocialMedia = () => {
    return (<div className='flex gap-5'>
        <a href={linkedInURL} target='_blank'><FaLinkedin className='text-white text-[1.5rem] ' /> </a>
        <a href={githubURL} target='_blank'><FaSquareGithub className='text-white text-[1.5rem]' /> </a>
        <a href={leetcodeURL} target='_blank'><SiLeetcode className='text-white text-[1.5rem]' /> </a>
    </div>);
}
export default SocialMedia;