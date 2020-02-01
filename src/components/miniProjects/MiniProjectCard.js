import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "./MiniProjectCard.css";
import LangIcon from "./LangIcon";

const ProjectCard = ({
  project: { image, alt, title, text, pagelink, codelink, tech }
}) => {
  return (
    <Card className='mini-proj-card'>
      <Image src={`${image}`} alt={`${alt}`} className='mini-proj-img' />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta className='center'>
          <a href={`${pagelink}`} target='_blank' rel='noopener noreferrer'>
            <Icon name='big angle double right' />
          </a>{" "}
          <a href={`${codelink}`} target='_blank' rel='noopener noreferrer'>
            <Icon name='big github square' />
          </a>
        </Card.Meta>

        <Card.Description>{text}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LangIcon tech={tech} />
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
