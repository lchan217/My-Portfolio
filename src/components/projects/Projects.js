import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import { projects } from "./ProjectData";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
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
    let isMobile;
    const width = this.state.width;
    width <= 1000 ? (isMobile = true) : (isMobile = false);

    let itemsPerRow;
    isMobile ? (itemsPerRow = 1) : (itemsPerRow = 2);
    let picHeight;
    isMobile ? (picHeight = 150) : (picHeight = 250);

    return (
      <div className='projects'>
        <h1 className='center'>My Projects</h1>
        <Card.Group itemsPerRow={itemsPerRow}>
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </Card.Group>
      </div>
    );
  }
}

export default Projects;
