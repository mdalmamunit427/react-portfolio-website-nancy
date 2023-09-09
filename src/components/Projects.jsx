import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="company-profile">
      <div className="company-info" id="project">
        <h2>My Latest Project</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>

      {/* projects */}
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="cards">
            <div>
              <div className="card-overlay"></div>
              <div className="card-info">
                <p>{project.category}</p>
                <h4>{project.title}</h4>
                <button className="btn-outline">View Details</button>
              </div>
              <div className="card-image">
                <img src={project.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button className="btn">See More</button>
      </div>
    </div>
  );
};

export default Projects;
