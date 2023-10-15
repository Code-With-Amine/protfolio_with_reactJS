import React from "react";
import Header from "./Header";
import { projectsInfo } from "../assets/data/projects";
import "../style/projects.scss";

function Projects() {
  return (
    <div className="container" id="project">
      <Header title="Projects" />
      {projectsInfo.map(
        ({ id, cover, title, summery, technologies, codeSource, link }) => (
          <div className="row mb-5 project" key={id}>
            <img
              src={cover}
              alt={title}
              className="col-lg-5 col-sm-12 h-100 img-fluid project--image"
            />
            <div className="col-lg-5 col-sm-12 py-4 w-lg-50 w-sm-100 mx-auto">
              <h1 className="project--title">{title}</h1>
              <p className="project--overviwe mt-4">{summery}</p>
              <div className="d-flex gap-2 mt-4 flex-nowrap w-100">
                <strong className="lead fw-bold h-100">technologies:</strong>
                  <div className="d-flex gap-2 align-items-center flex-wrap w-100">
                  {technologies.map((tech, key) => (
                    <span key={`${tech}-${key}`} className="p-2 rounded project--technology">
                      {tech}
                    </span>
                  ))}
              </div>
              </div>
              <div className="row mt-4 justify-content-center">
                <a
                  href={codeSource}
                  rel="noreferrer"
                  target="_blank"
                  className="btn col-3 offset-lg-3 project--codeSource"
                >
                  code source
                </a>
                <a
                  href={link}
                  rel="noreferrer"
                  target="_blank"
                  className="btn fw-bold col-3 text-white offset-lg-3 project--site "
                >
                  View site{" "}
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        )
      )}
      <a
        href="https://github.com/Code-With-Amine?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="btn text-center fw-bold col-3 text-white offset-lg-3 project--site w-100 d-block mx-auto"
        style={{ fontSize: "1.5rem" }}
      >
        SEE MORE ...
      </a>
    </div>
  );
}

export default Projects;
