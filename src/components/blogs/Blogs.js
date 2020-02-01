import React from "react";
import Moment from "react-moment";
import { Card, Image } from "semantic-ui-react";
import "./Blogs.css";

const Blogs = ({ title, content, thumbnail, guid, link, pubDate }) => {
  return (
    <Card className='blog-card'>
      <Card.Header>{title}</Card.Header>
      <Image src={thumbnail} />
      <br /> <br />
      <Card.Meta>
        Published on <Moment format='YYYY-MM-DD'>{pubDate}</Moment>
      </Card.Meta>{" "}
      <br />
      <Card.Description>
        {content.substr(0, 300).replace(/<[^>]*>?/gm, "")}... <br />
        <br />
        <a
          href={guid}
          target='_blank'
          rel='noopener noreferrer'
          className='blog-link'
        >
          {" "}
          Continue Reading >>{" "}
        </a>
      </Card.Description>
    </Card>
  );
};

export default Blogs;
