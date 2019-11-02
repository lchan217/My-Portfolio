import React, { Component } from 'react';
import Blogs from './Blogs'

class BlogContainer extends Component {
  state = {
    blogs: []
  }
  componentDidMount() {
   fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lchan217')
    .then(response => response.json())
    .then((data) => {
       this.setState({
         blogs: data.items
       })
    })
 }

  render(){

    return (
      <div className="blog-feed">
        <h1 style={{textAlign:"center"}}>My Blogs</h1>
        {this.state.blogs.map((blog, index) => <Blogs key={index} {...blog}/>)}
      </div>
    );
  };
}

export default BlogContainer;
