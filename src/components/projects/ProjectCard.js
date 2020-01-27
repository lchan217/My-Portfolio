import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ProjectCard.css";

const ProjectCard = ({
  project: { image, title, text, pagelink, codelink, footer }
}) => {
  return (
    <div>
      <Card style={{ width: "18rem", height: "30rem" }}>
        <Card.Img
          variant='top'
          src={`${image}`}
          style={{ height: "10rem" }}
        ></Card.Img>
        <Card.Body>
          <Card.Title> {title}</Card.Title>
          <Card.Text> {text}</Card.Text>
          <Button
            href={`${pagelink}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            See Page
          </Button>{" "}
          <Button
            href={`${codelink}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            See Code
          </Button>
        </Card.Body>
        <Card.Footer>{footer}</Card.Footer>
      </Card>
    </div>
  );
};

export default ProjectCard;
