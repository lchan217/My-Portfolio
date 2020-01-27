import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./ProjectData";
import { Card } from "semantic-ui-react";

const MiniProjectss = () => (
  <div>
    <h1 className='center'>Mini Projects</h1>
    <p>
      This is a compilation of mini-projects from take-home interview tech
      challenges and {""}
      <a
        href='https://www.frontendmentor.io/challenges'
        rel='noopener noreferrer'
        target='_blank'
      >
        frontend mentor challenges
      </a>
      . Any feedback is welcomed. Enjoy!
    </p>
    <br />
    <Card.Group>
      {ProjectData.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </Card.Group>
  </div>
);

export default MiniProjectss;
