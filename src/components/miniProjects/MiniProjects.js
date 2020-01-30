import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./ProjectData";
import { Card } from "semantic-ui-react";

let itemsPerRow;
window.innerWidth > 500 ? (itemsPerRow = 3) : (itemsPerRow = 1);

const MiniProjects = () => (
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
      . Red cards are from solo projects and blue cards are from collaboration
      projects. Any feedback is welcomed. Enjoy!
    </p>
    <br />
    <Card.Group itemsPerRow={itemsPerRow}>
      {ProjectData.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </Card.Group>
  </div>
);

export default MiniProjects;
