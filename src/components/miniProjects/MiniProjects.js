import React, { Component } from "react";
import ProjectCard from "./MiniProjectCard";
import { MiniProjectData } from "./MiniProjectData";
import { Item } from "semantic-ui-react";

class MiniProjects extends Component {
  constructor(props) {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    let itemsPerRow;
    if (this.state.width >= 800) {
      itemsPerRow = 3;
    } else if (this.state.width < 800 && this.state.width >= 550) {
      itemsPerRow = 2;
    } else {
      itemsPerRow = 1;
    }

    return (
      <div>
        <h1 className='center'>Mini Projects</h1>
        <p>
          This is a compilation of solo and collaboration mini-projects from
          interview tech challenges and {""}
          <a
            href='https://www.frontendmentor.io/challenges'
            rel='noopener noreferrer'
            target='_blank'
            className='mini-proj-link'
          >
            frontend mentor challenges
          </a>{" "}
          I am currently working on. Any feedback is welcomed. Enjoy!
        </p>
        <br />
        <Item.Group itemsPerRow={itemsPerRow}>
          {MiniProjectData.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </Item.Group>
      </div>
    );
  }
}
export default MiniProjects;
