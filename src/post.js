import React, { Component } from 'react';

class Post extends Component {


  render() {

    return (
        <div>
        <table className="table" >
          <tbody>
            <tr>
              <td>Title</td>
              <th id="title">{this.props.data.title}</th>
              </tr>
              <tr>
              <td>Author</td>
              <td id="author">{ this.props.data.username }</td>
              </tr>
              <tr>
              <td>Content</td>
              <td id="content">{ this.props.data.content }</td>
              </tr>
              <tr>
              <td>Category</td>
              <td id="category">{this.props.data.category}</td>
              </tr> 
              <tr>
              <td>Date</td>
              <td id="date">{this.props.data.date}</td>
              </tr> 
              <tr>
              <td>ID</td>
              <td id="id">{this.props.data.id}</td>
              </tr> 
           </tbody>
              </table>
        
      </div>
    );
  }
}

export default Post;