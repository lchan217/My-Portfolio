import React from "react";
import { Item, Image, Icon } from "semantic-ui-react";
import "./MiniProjectCard.css";

const ProjectItem = ({
  project: { image, alt, title, text, challenge, pagelink, codelink, tech }
}) => {
  return (
    <Item className='mini-proj-Item'>
      <Image
        size='small'
        src={`${image}`}
        alt={`${alt}`}
        className='mini-proj-img'
      />
      <Item.Content>
        <Item.Header>{title}</Item.Header>
        <Item.Description>
          <p>{text} </p>
          <p>
            <b>What I Learned: </b>
            {challenge}
          </p>
        </Item.Description>
        <Item.Meta>
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
        </Item.Meta>
        <Item.Extra>
          Technologies and Frameworks: <i>{tech.join(", ")}</i>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default ProjectItem;
