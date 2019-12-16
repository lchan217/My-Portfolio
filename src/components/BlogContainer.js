import React, { Component } from "react";
import Blogs from "./Blogs";
import { Dimmer, Loader, Image, Segment, Card } from "semantic-ui-react";

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
      data = (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>

          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
      );
    } else {
      data = (
        <Card.Group itemsPerRow={3}>
          {this.state.blogs.map((blog, index) => (
            <Blogs key={index} {...blog} />
          ))}
        </Card.Group>
      );
    }

    return (
      <div className='blogs'>
        <h1 style={{ textAlign: "center" }}>My Blogs</h1>
        <br />
        {data}
      </div>
    );
  }
}

export default BlogContainer;
