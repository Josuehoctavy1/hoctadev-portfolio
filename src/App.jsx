import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
  <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Experience/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </>
  );    
};
export default App;