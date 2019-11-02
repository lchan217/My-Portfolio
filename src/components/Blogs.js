import React from 'react';

const Blogs = ({title, content, thumbnail, guid, link, pubDate}) => {
  return (
    <div className="blog-feed">
      <div class="ui segment">
        <div class="ui hidden divider">
          <a href={guid} target='_blank'>{title}</a></div>
          <div>published on {pubDate}</div>
        </div>
    </div>
  );
};

export default Blogs;
