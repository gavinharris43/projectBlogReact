import React, { Component } from 'react';
import './App.css';
import App from './App.js';
import Session from './Session';


class login extends Component {
  render() {
    return (
       
       <div>
         
  <form class="form-signin">
  
    <h1 class="h3 mb-3 font-weight-normal">Register*</h1>
    <label for="name" class="sr-only">Name*</label>
    <input type="name" id="name" class="form-control" placeholder="Name" required="true" autofocus=""/>
    <label for="inputEmail" class="sr-only">Email address*</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="true" />
    <label for="inputPassword" class="sr-only">Password*</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="true"/>
    <div class="checkbox mb-3">

  
  
  </div>
  <button class="btn btn-lg btn-primary btn-block" onClick={Session.login} >Sign in</button>
 
  </form>
       
  </div>
    );
  }
}

export default login;