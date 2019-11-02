import React, { Component } from 'react';

class Blog extends Component {
  state = {
    blogPosts: []
  }
  componentDidMount() {
   fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lchan217')
     .then(response => response.json())
     .then(data => {
       this.setState({
         blogPosts: data
       })
     })
 }

  render(){
    return (
      <div className="blog">
      <h1>My Blog Feed</h1>
      </div>
    );
  };
}

export default Blog;
