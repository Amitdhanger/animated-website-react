

import React from "react";
import { Link } from "react-scroll";
import logo from "../../public/assets/hero/logox.png"

const Navbar = () => {
  return (
    <div
      className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="left nav_items">
        <img src={logo} alt="logo" style={{ width: "100px" }} />
      </div>
      <div className="right">
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className="nav_items animated-link"
        >
          Home
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={1000}
          className="nav_items animated-link"
        >
          Services
        </Link>
        <Link
          to="industries"
          smooth={true}
          duration={1000}
          className="nav_items animated-link"
        >
          Industries
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={1000}
          className="nav_items animated-link"
        >
          Projects
        </Link>
          </div>
    </div>
  );
};

export default Navbar;


