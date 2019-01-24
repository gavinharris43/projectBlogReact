import React, { Component } from 'react';
import axios from 'axios';
import Post from './post';
//import './App.css';

class ts extends Component {
  constructor() {
    super();
    this.state = {
     blog:""
    }
} 
componentDidMount() {  
axios({
  method:'get',
  url:'http://localhost:8080/movies1/api/blog/getTSBlogs',
  responseType:'json'
})
.then(response => {
  console.log(response.data)
  if (response.data != undefined) {
    this.setState({
      blog: response.data,
    })
  }
  });
}

  render() {
  let posts=[];
  
    for(let post of this.state.blog){
    posts.push(<Post data={post}/>);
    }

    return (
      <div><p>Taylor Swift</p>
      
      <div >{posts}</div>
      </div>

    );
  }
}

export default ts;