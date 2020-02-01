import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "./ProjectCard.css";

const ProjectCard = ({
  project: {
    image,
    alt,
    header,
    website,
    github,
    demo,
    description,
    contribution,
    tech,
    height
  }
}) => {
  return (
    <Card className='project-card'>
      <Image
        src={`${image}`}
        alt={`${alt}`}
        className='project-img'
        style={{ height: `${height}` }}
      ></Image>
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        <Card.Meta className='center'>
          <a href={`${website}`} target='_blank' rel='noopener noreferrer'>
            <div className='tooltip'>
              <Icon name='big angle double right' />
              <span class='tooltiptext'>Website</span>
            </div>
          </a>
          <a href={`${github}`} target='_blank' rel='noopener noreferrer'>
            <div className='tooltip'>
              <Icon name='big github square' />
              <span class='tooltiptext'>Code</span>
            </div>
          </a>
          <a href={`${demo}`} target='_blank' rel='noopener noreferrer'>
            <div className='tooltip'>
              <Icon name='big youtube' />
              <span class='tooltiptext'>Demo</span>
            </div>
          </a>
        </Card.Meta>
        <Card.Description>{description}</Card.Description> <br />
        <Card.Description>{contribution}</Card.Description>
      </Card.Content>
      <Card.Content extra>{tech}</Card.Content>
    </Card>
  );
};

export default ProjectCard;
