import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";  
import Footer from "./components/Footer"; 

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
