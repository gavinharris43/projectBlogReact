import React, { Component } from 'react';

import home from './home';
import ts from './ts';
import Login from './login';
import guitar from './guitar';
import addBlog from './addblog';
import register from './register';
import editBlog from './editblog';
import deleteBlog from './delblog';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';

class App extends Component {


  render() {

    return (
      <Router>

        <div className="container"> {}
          <div class="navbar-dark navbar-collapse collapse">

            <ul class="nav navbar-dark navbar-nav "> <li><h6 class="App-header-title">GavinHarris43 - Blog</h6></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/ts" >T.S.</Link></li>
              <li><Link to="/guitar">Guitar</Link></li>
              {console.log("checky wecky")}
              {(sessionStorage.getItem("loggedUser")) === null ? <li><Link to="/reg">Register</Link></li> : <li><Link to="/addblog">New Blog</Link></li>}
              {(sessionStorage.getItem("loggedUser")) === null ? "" : <li><Link to="/editblog">Edit Blog</Link></li>}
              {(sessionStorage.getItem("loggedUser")) === null ? "" : <li><Link to="/delblog">Delete Blog</Link></li>}
              {(sessionStorage.getItem("loggedUser")) === null ? <li><Link to="/login">Login</Link></li> : <li><Link to="/login" onClick={() => { sessionStorage.removeItem("loggedUser"); window.location.reload() }}>Logout</Link></li>}

            </ul>

          </div>
          <div>
          </div>
          <div className="App-header">

            <div>
              <Route exact path="/" component={home} />
              <Route path="/ts" component={ts} />
              <Route path="/guitar" component={guitar} />
              <Route path="/login" component={() => <Login username={this.user} />} />
              <Route path="/addblog" component={addBlog} />
              <Route path="/editblog" component={editBlog} />
              <Route path="/delblog" component={deleteBlog} />
              <Route path="/reg" component={register} />
            </div>


          </div>
        </div>
      </Router>
    );
  }
}

export default App;
