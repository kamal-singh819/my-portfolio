import { leetcodeURL, linkedInURL } from "../data";
const Blog = () => {
    return(
        <section id="blog" className="text-gray-400 bg-darkBackground pb-5">
            <div className="container px-5 py-10 mx-auto text-center lg:px-10 xl:px-40" data-aos="fade-up">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">My Blog</h1>
                <p className="text-start">
                In my journey as a MERN stack developer, I&apos;ve honed my problem-solving skills through tackling over 900 Data Structure and Algorithm problems & I&apos;ve 3-star on <a className='font-bold text-white' href={leetcodeURL}> Leetcode</a>. This journey has not only sharpened my analytical thinking but also instilled in me a deep appreciation for the elegance and efficiency of well-crafted code.
                <br /> <br />While DSA is one thing, I&apos;m also passionate about exploring the vast landscape of Full Stack Development. I&apos;ve delved into various technologies like MongoDB, Express.js, React.js, and Node.js to build robust and scalable applications.
                <br />Beyond web development, I&apos;ve explored Machine Learning and developed some projects such as Digit Detection, Leaf Disease Detection.
                This blog serves as a platform to share insights, experiences, and discoveries from my journey as a Developer and a Problem Solver.
                Together, let&apos;s unlock the full potential of problem-solving in the world of Full Stack Development.
                Let&apos;s connect me on <a href={linkedInURL} className="text-white font-semibold">LinkedIn</a>.
                <br /> <span className=" italic font-semibold">I love to work in JavaScript.</span>
                </p>
            </div>
        </section>
    )
}

export default Blog;