import React, { Component } from "react";
import { Card } from "semantic-ui-react";
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
    let itemsPerRow;
    this.state.width <= 1000 ? (itemsPerRow = 1) : (itemsPerRow = 2);

    return (
      <div className='projects'>
        <h1 className='center'>My Projects</h1> <br />
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
