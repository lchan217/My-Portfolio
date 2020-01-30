import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "./ProjectCard.css";
import LangIcon from "./LangIcon";

const ProjectCard = ({
  project: { image, title, text, pagelink, codelink, footer, color }
}) => {
  return (
    <Card>
      <Image src={`${image}`} />
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
        <LangIcon footer={footer} />
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
