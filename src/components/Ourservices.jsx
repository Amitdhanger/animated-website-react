import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 


const services = [
  { id: 1, title: 'Web Development', description: 'Building modern and responsive websites with the latest technologies.' },
  { id: 2, title: 'Mobile Development', description: 'Creating mobile applications for iOS and Android that perform exceptionally.' },
  { id: 3, title: 'UI/UX Design', description: 'Designing beautiful, user-friendly interfaces for websites and apps.' },
  { id: 4, title: 'Digital Marketing', description: 'Helping businesses grow through digital marketing strategies and content creation.' },
];

const Services = () => {

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container services" id="services">
   
      <Slider {...settings} className="background-slider">
        <div><img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJpbmFyeXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080" alt="background-1" /></div>
        <div><img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJpbmFyeXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080" alt="background-1" /></div>
        <div><img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJpbmFyeXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080" alt="background-1" /></div>
      </Slider>


      <div className="content">
        <h1 data-aos="fade-up">Our Services</h1>
        <div className="services-boxes">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-box"
              data-aos="fade-up"
              data-aos-delay={service.id * 100}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
