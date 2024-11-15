import React from 'react';

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A cutting-edge platform for managing business operations."
  },
  {
    id: 2,
    title: "Project Beta",
    description: "An innovative mobile app designed to simplify daily tasks."
  },
  {
    id: 3,
    title: "Project Gamma",
     description: "A sleek e-commerce website offering a wide range of products."
  },
  {
    id: 4,
    title: "Project Delta",
    imageSrc: "https://images.unsplash.com/photo-1581093581217-df6ec23871f9?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJpbmFyeXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080", // Image URL from Unsplash
    description: "A custom CRM solution built to streamline client relationships."
  }
];


const Projects = () => {
  return (
    <div className="container projects" id="projects">
      <h1>OUR PROJECTS</h1>
      <div className="items">
        {projects.map((project) => (
          <div
            className="item"
            key={project.id}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={project.id * 200}
          >
                   <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
