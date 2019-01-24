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
              <td id="author">{ this.props.data.author }</td>
              </tr>
              <tr>
              <td>Content</td>
              <td id="content">{ this.props.data.content }</td>
              </tr>
              {<tr>
              <td>Date</td>
              <td id="date">{this.props.data.date}</td>
              </tr> }
           </tbody>
              </table>
        
      </div>
    );
  }
}

export default Post;