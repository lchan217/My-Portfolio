import React from "react";
import ProjectCard from "./MiniProjectCard";
import { MiniProjectData } from "./MiniProjectData";
import { Card } from "semantic-ui-react";

let itemsPerRow;
window.innerWidth > 500 ? (itemsPerRow = 3) : (itemsPerRow = 1);

const MiniProjects = () => (
  <div>
    <h1 className='center'>Mini Projects</h1>
    <p>
      This is a compilation of solo and collaboration mini-projects from
      interview tech challenges and {""}
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
    <Card.Group itemsPerRow={itemsPerRow}>
      {MiniProjectData.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </Card.Group>
  </div>
);

export default MiniProjects;
