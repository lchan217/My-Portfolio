import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
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
          <Card.Meta>{text}</Card.Meta>
        </Card.Content>
        <Button href={`${pagelink}`} target='_blank' rel='noopener noreferrer'>
          See Page
        </Button>{" "}
        <Button href={`${codelink}`} target='_blank' rel='noopener noreferrer'>
          See Code
        </Button>
        <Card.Content extra>{footer}</Card.Content>
      </Card>
    </div>
  );
};

export default ProjectCard;
