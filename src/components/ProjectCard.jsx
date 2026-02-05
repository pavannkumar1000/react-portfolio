import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
      <div className="glass-card project-card h-100 d-flex flex-column">

        {/* Header */}
        <h5 className="project-title mb-2">
          {project.title}
        </h5>

        {/* Description */}
        <p className="project-desc flex-grow-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="project-tech mb-4">
          {project.tech.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <span
                key={index}
                className="project-tech-pill"
                style={{
                  background: tech.color
                    ? tech.color + "22"
                    : "#e5e7eb",
                  color: tech.color || "#111827",
                  border: tech.color
                    ? `1px solid ${tech.color}55`
                    : "1px solid #d1d5db",
                }}
              >
                {Icon && <Icon size={14} />}
                {tech.name}
              </span>
            );
          })}
        </div>

        {/* Live Button */}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-project mt-auto"
          >
            Live Demo <FaExternalLinkAlt size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
