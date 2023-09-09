
import "./App.css";
import About from "./components/About";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Company/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ScrollTop/>
    </>
  );
}

export default App;
