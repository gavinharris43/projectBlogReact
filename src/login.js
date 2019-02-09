import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import config from './config';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null

    }
  }


  checkUser = () => {

    axios.post(config.api + '/movies1/api/blog/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then((response) => {
        if (response.data[0] == this.state.username) {
          sessionStorage.setItem("loggedUser", response.data[0]);
          window.location.reload();
        }
      })
      .catch(function (error) {
      });
  }

  handleSubmit = (e) => {
    this.checkUser();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (

      <div>

        <h1 class="h3 mb-3 font-weight-normal">{sessionStorage.getItem("loggedUser") === null ? "Please sign in" : sessionStorage.getItem("loggedUser") + " Logged In"}</h1>
        <label for="username" class="sr-only">Username</label>
        <input onChange={this.handleChange} type="username" id="username" class="form-control" placeholder="Username" required="" autofocus="" />
        <label for="inputPassword" class="sr-only">Password</label>
        <input onChange={this.handleChange} type="password" id="password" class="form-control" placeholder="Password" required="" />
        <div class="checkbox mb-3">

          <label class="custom-select-sm">
            <input type="checkbox" value="remember-me" class="small.small" /> Remember me
    </label>
        </div>

        <button class="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit} >Sign in</button>



      </div>
    );
  }
}

export default Login;