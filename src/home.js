import React, { Component } from 'react';
import axios from 'axios';
import Post from './post';
import config from './config';

class home extends Component {
  constructor() {
    super();
    this.state = {
      blog: ""
    }
  }
  componentDidMount() {
    axios({
      method: 'get',
      url: config.api + '/movies1/api/blog/getAllBlogs',
      responseType: 'json'
    })
      .then(response => {
        if (response.data != undefined) {
          this.setState({
            blog: response.data,
          })
        }
      });
  }

  render() {
    let posts = [];
    if (this.state.blog) {
      for (let post of this.state.blog) {
        posts.push(<Post data={post} />);
      }
    }
    return (
      <div> <h1>HomePage</h1>
        <div >{posts}</div>
      </div>
    );
  }
}

export default home;