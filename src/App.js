import React, { Component } from 'react';

import logo from './logo.svg';
import home from './home';
import ts from './ts';
import login from './login';
import guitar from './guitar';
import addBlog from './addblog';
import register from './register';
import Session from './Session';
import{
  BrowserRouter as Router,
  Route,Link
} from 'react-router-dom';

var sessionLog =new Session();

 var getLoggedIn= sessionLog.getLoggedIn ;
// var newBlog;

//   if (loggedIn) {
  
// } else {
//   loginOrLogout = <li><Link to="/login">Login</Link></li>;
//   newBlog=''
// }



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
              {sessionLog.getLoggedIn !==  true ? <li><Link to="/addblog">New Blog</Link></li>:<li><Link to="/reg">Register</Link></li>}
              {sessionLog.getloggedIn !== true ? <li><Link to="/login" onClick={sessionLog.logout}>Logout</Link></li>: <li><Link to="/login">Login</Link></li> }
              {/* {loginOrLogout}
              {newBlog} */}

            </ul>

      </div>
          <div>
            </div>
            <div className="App-header">
      
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
         
          <div>
                <Route exact path="/" component={home} />
                <Route path="/ts" component={ts} />
                <Route path="/guitar" component={guitar} />
                <Route path="/login" component={login}/>
                {/* help */}
                <Route path="/addblog" component={addBlog} />
                <Route path="/reg" component={register} />
          </div>
          
          
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
