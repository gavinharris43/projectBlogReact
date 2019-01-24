import React, { Component } from 'react';
import axios from 'axios';
import Post from './post';
import './App.css';

class guitar extends Component {
      constructor() {
        super();
        this.state = {
         blog:""
        }
    } 
    componentDidMount() {  
    axios({
      method:'get',
      url:'http://localhost:8080/movies1/api/blog/getGuitarBlogs',
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
      if (this.state.blog){
        for(let post of this.state.blog){
        posts.push(<Post data={post}/>);
        }
      }
        return (
          <div> <p>Guitar</p>
          <div >{posts}</div>
    </div>
        );
      }
    }
export default guitar;