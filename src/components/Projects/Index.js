import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProjectsArray from "./Project";

import "../../App.css"

const ProjectCarousel = () => {
  return (
    <section id="project">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="fw-bold text-center">Featured Projects</h1>
            <hr/>
          </div>
          <div class="col-8-md">
            <Carousel fade className="projectCarousel">
              {ProjectsArray.map((project) => (
                <Carousel.Item key={project.id}>
                  <img className="d-block w-100" src={project.img} alt={project.name} />
                  <Carousel.Caption className="projectCaption">
                    <h3 className="projectName">{project.name}</h3>
                    <p>
                      GitHub <a href={project.gitHubLink} target="_blank" rel="noreferrer">repository</a>
                    </p>
                    <p>Project <a href={project.projectLink}>Link</a></p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;