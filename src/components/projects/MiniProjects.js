import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./ProjectData";
import { Card } from "semantic-ui-react";

const MiniProjectss = () => (
  <div>
    <Card.Group>
      {ProjectData.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </Card.Group>
  </div>
);

export default MiniProjectss;
