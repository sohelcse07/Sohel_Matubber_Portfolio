// import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./pages/Sidebar";
import Section from "./components/Section";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Tech from "./pages/Tech";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import ScrollToTop from "react-scroll-to-top";
import VanishingInput from "./pages/VanishingInput";

function App() {
  return (
    <>
      <Sidebar className="bg-gradient-to-r  from-gray-100 to-gray-300" />

      <Section className="" />
      {/* <VanishingInput/> */}
      <About className="" />

      <Education className="" />

      <Tech className="overflow-y-auto" />

      <Projects className="" />
      <Contact className="" />

      <Footer />

      <ScrollToTop
        smooth
        color="#fff"
        style={{
          backgroundColor: "#00CF5D",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </>
  );
}

export default App;
