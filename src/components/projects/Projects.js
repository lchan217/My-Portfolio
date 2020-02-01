import React from "react";
import { Card } from "semantic-ui-react";
import { projects } from "./ProjectData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='center'>My Projects</h1> <br />
      <Card.Group stackable='true' itemsPerRow={2}>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </Card.Group>
    </div>
  );
};

export default Projects;
