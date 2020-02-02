import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "./MiniProjectCard.css";
import LangIcon from "./LangIcon";

const ProjectCard = ({
  project: { image, alt, title, text, challenge, pagelink, codelink, tech }
}) => {
  return (
    <Card className='mini-proj-card'>
      <Image src={`${image}`} alt={`${alt}`} className='mini-proj-img' />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta className='center'>
          <a href={`${pagelink}`} target='_blank' rel='noopener noreferrer'>
            <div className='tooltip'>
              {" "}
              <Icon name='big angle double right' />
              <span class='tooltiptext'>Website</span>
            </div>
          </a>{" "}
          <a href={`${codelink}`} target='_blank' rel='noopener noreferrer'>
            <div className='tooltip'>
              <Icon name='big github square' />
              <span class='tooltiptext'>Code</span>
            </div>
          </a>
        </Card.Meta>

        <Card.Description>
          <p>{text} </p>
          <p>
            <b>What I Learned: </b>
            {challenge}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LangIcon tech={tech} />
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
