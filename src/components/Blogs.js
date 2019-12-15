import React from "react";
import Moment from "react-moment";

const Blogs = ({ title, content, thumbnail, guid, link, pubDate }) => {
  return (
    <div className='blog-feed'>
      <div class='ui segment' style={{ backgroundColor: "#FFCCFF" }}>
        <div class='ui hidden divider'>
          <h3>{title}</h3>
        </div>
        <br />
        <div>
          <i>
            Published On <Moment format='DD/MM/YYYY'>{pubDate}</Moment>
          </i>
        </div>
        <p>
          {content.substr(0, 300).replace(/<[^>]*>?/gm, "")}... <br />
          <br />
          <a href={guid} target='_blank'>
            {" "}
            Continue Reading >>{" "}
          </a>
        </p>
      </div>
      <br />
    </div>
  );
};

export default Blogs;
