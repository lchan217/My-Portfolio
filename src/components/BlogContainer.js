import React, { Component } from "react";
import Blogs from "./Blogs";
import { Card } from "semantic-ui-react";

class BlogContainer extends Component {
  state = {
    blogs: [],
    isLoading: true
  };
  componentDidMount() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lchan217"
    )
      .then(response => response.json())

      .then(data => {
        this.setState({
          blogs: data.items,
          isLoading: false
        });
      });
  }

  render() {
    let data;
    if (this.state.isLoading) {
      data = "Loading...";
    } else {
      data = (
        <div>
          <Card.Group itemsPerRow={2}>
            {this.state.blogs.map((blog, index) => (
              <Blogs key={index} {...blog} />
            ))}
          </Card.Group>
        </div>
      );
    }

    return (
      <div className='blog-feed'>
        <h1 style={{ textAlign: "center" }}>My Blogs</h1>
        <br />
        {data}
      </div>
    );
  }
}

export default BlogContainer;
