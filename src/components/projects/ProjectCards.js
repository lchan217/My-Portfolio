import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./ProjectData";
import { CardDeck } from "react-bootstrap";

const ProjectCards = () => (
  <div>
    <CardDeck>
      {ProjectData.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </CardDeck>
  </div>
);

export default ProjectCards;
