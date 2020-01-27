import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "./ProjectCard.css";

const ProjectCard = ({
  project: { image, title, text, pagelink, codelink, footer }
}) => {
  return (
    <div>
      <Card>
        <Image src={`${image}`} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <a href={`${pagelink}`} target='_blank' rel='noopener noreferrer'>
              See Page <Icon name='angle double right' />
            </a>{" "}
            |{" "}
            <a href={`${codelink}`} target='_blank' rel='noopener noreferrer'>
              See Code <Icon name='github square' />
            </a>
          </Card.Meta>
        </Card.Content>
        <Card.Description>{text}</Card.Description>

        <Card.Content extra>{footer}</Card.Content>
      </Card>
    </div>
  );
};

export default ProjectCard;
