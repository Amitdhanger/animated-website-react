import React from 'react';

const industries = [
  {
    id: 1,
    title: "Healthcare",
    imageSrc: "healthcare.png",
    description: "Innovative solutions for healthcare management and services."
  },
  {
    id: 2,
    title: "Finance",
    imageSrc: "finance.png",
    description: "Empowering financial institutions with robust digital solutions."
  },
  {
    id: 3,
    title: "E-Commerce",
    imageSrc: "ecommerce.png",
    description: "Building seamless online shopping experiences."
  },
  {
    id: 4,
    title: "Education",
    imageSrc: "education.png",
    description: "Creating interactive platforms for online learning and education."
  },
  {
    id: 5,
    title: "Manufacturing",
    imageSrc: "manufacturing.png",
    description: "Optimizing manufacturing processes with digital solutions."
  },
  {
    id: 6,
    title: "Retail",
    imageSrc: "retail.png",
    description: "Helping retail businesses improve operations and customer experience."
  }
];

const IndustriesWeServe = () => {
  return (
    <div className="container industries" id="industries">
      <h1>INDUSTRIES WE SERVE</h1>
      <div className="items">
        {industries.map((industry) => (
          <div
            className="item"
            key={industry.id}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={industry.id * 200} 
          >
             <h3>{industry.title}</h3>
            <p>{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;
