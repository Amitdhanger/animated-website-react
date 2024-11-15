import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import OurServices from "./components/Ourservices";
import Projects from "./components/Projects";
import Industry from "./components/IndustriesWeServe";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="container">
        <Home />
        <OurServices />
        <Projects />
        <Industry />
        <Footer />
      </div>
    </>
  );
};

export default App;
