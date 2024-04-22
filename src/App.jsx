import Navbar from "./components/Navbar";
import About from './components/About';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <Footer />
    </>
  )
}

export default App;
