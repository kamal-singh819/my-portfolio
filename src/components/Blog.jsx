import { leetcodeURL, linkedInURL } from "../data";

const Blog = () => {
    return (
        <section id="blog" className="text-gray-400 bg-darkBackground pb-5">
            <div className="container px-5 py-10 mx-auto text-center lg:px-10 xl:px-40" data-aos="fade-up">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">My Blog</h1>
                <p className="text-start">
                    In my journey as a Software Developer, I have been working on both frontend and backend technologies, with a strong interest in building scalable systems. I have experience in technologies like Node.js, Nest.js, Spring Boot, React, and React Native, along with databases such as MongoDB and PostgreSQL.
                    <br /><br />
                    I enjoy solving problems and have practiced Data Structures and Algorithms on <a className='font-bold text-white' href={leetcodeURL}>LeetCode</a>, which has helped me improve my logical thinking and coding skills.
                    <br /><br />
                    I have also built real-world applications, including a React Native mobile app that is live on the Play Store, and worked on backend systems using microservices, Redis, and RabbitMQ.
                    <br /><br />
                    This blog is where I share my learnings, experiences, and practical knowledge from development. Let&apos;s connect on <a href={linkedInURL} className="text-white font-semibold">LinkedIn</a>.
                    <br /> <span className="italic font-semibold">I enjoy building backend systems and scalable applications.</span>
                </p>
            </div>
        </section>
    )
}

export default Blog;