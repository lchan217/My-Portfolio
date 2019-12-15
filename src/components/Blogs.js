import React from "react";
import Moment from "react-moment";
import { Card, Image, Reveal } from "semantic-ui-react";

const Blogs = ({ title, content, thumbnail, guid, link, pubDate }) => {
  return (
    <div className='blog-feed'>
      <Card>
        <Reveal animated='move right'>
          <Reveal.Content visible>
            <Image src={thumbnail} style={{ width: "100%", height: "100%" }} />
          </Reveal.Content>
          <Reveal.Content hidden>
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
          </Reveal.Content>
        </Reveal>
      </Card>
    </div>
  );
};

export default Blogs;
