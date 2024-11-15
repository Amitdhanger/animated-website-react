import React, { useEffect, useRef } from "react";
import logo from "../../public/assets/hero/logox.png"; 

const Home = () => {
  const typedRef = useRef(null);

  return (
    <div className="home-container" id="home">

      <video autoPlay loop muted className="background-video">
        <source
          src="https://www.w3schools.com/html/movie.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>


      <div className="content-container">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1>
            The world’s largest independent pool and commercial management
          </h1>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={logo} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
