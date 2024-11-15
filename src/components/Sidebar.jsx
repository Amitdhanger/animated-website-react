import React, { useEffect } from "react";
import { Link } from "react-scroll"; 

const Sidebar = () => {

  useEffect(() => {
    document.body.style.overflow = "hidden"; 

    const handleScroll = (e) => {
      e.preventDefault(); 
    };


    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchmove", handleScroll, { passive: false });

    return () => {
      
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-content">
   
  
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className="sidebar-item"
          onClick={() => document.body.style.overflow = "auto"} 
        >
          Home
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={1000}
          className="sidebar-item"
          onClick={() => document.body.style.overflow = "auto"}
        >
          Services
        </Link>
        <Link
          to="industries"
          smooth={true}
          duration={1000}
          className="sidebar-item"
          onClick={() => document.body.style.overflow = "auto"} 
        >
          Industries
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={1000}
          className="sidebar-item"
          onClick={() => document.body.style.overflow = "auto"} 
        >
          Projects
        </Link>
           </div>
    </div>
  );
};

export default Sidebar;
