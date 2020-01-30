import React from "react";
import womenCodigo from "./womenCodigo.jpg";

const ProjectCard = ({
  project: {
    image,
    alt,
    header,
    website,
    gibhut,
    demo,
    description,
    constribution,
    tech
  }
}) => {
  return <div>{header}</div>;
};

export default ProjectCard;
