import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './Projects.css';
import { projects } from '../../constants/portfolioData';

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <ul className="projects-grid">
          {projects.map((project, index) => (
            <li className={`project-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={project.id}>
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-links">
                  <a href={project.githubLink} className="btn btn-primary">View GitHub</a>
                  <a href={project.demoLink} className="link-with-icon">
                    View project <FiArrowUpRight />
                  </a>
                </div>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
