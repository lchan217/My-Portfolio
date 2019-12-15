import React from "react";
import Moment from "react-moment";
import { Card, Image } from "semantic-ui-react";

const Blogs = ({ title, content, thumbnail, guid, link, pubDate }) => {
  return (
    <div className='blog-feed'>
      <Card>
        <Image src={thumbnail} wrapped ui={false} />
        <Card.Header>{title}</Card.Header>
        <br />
        <Card.Meta>
          Published On <Moment format='DD/MM/YYYY'>{pubDate}</Moment>
        </Card.Meta>
        <br />
        <Card.Description>
          {content.substr(0, 300).replace(/<[^>]*>?/gm, "")}... <br />
          <br />
          <a href={guid} target='_blank'>
            {" "}
            Continue Reading >>{" "}
          </a>
        </Card.Description>
      </Card>
    </div>
  );
};

export default Blogs;
