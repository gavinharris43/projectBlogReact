import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import config from './config';



class Account extends Component {
    constructor() {
        super();
        this.state = {
           
            username: sessionStorage.getItem("loggedUser"),
            firstName: null,
            lastName: null,
            password: null
        }
    }

    updateAccount = () => {
        axios.put(config.api + '/movies1/api/blog/updateAccount/' +this.state.username, {

            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            userLevel: "0"
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    delAccount = () => {
        axios.delete(config.api + '/movies1/api/blog/deleteAccount/' +this.state.username, {
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.updateAccount();

    }
    handleDel = (e) => {
        e.preventDefault();
        this.delAccount();

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {


        return (

            <div>
                <h2>Update Account</h2>
                <form class="form-group" onSubmit={this.handleSubmit} className="form_size " action="">
                    First Name: <input onChange={this.handleChange} className="form-control" placeholder="First Name" id="firstName" required />
                    Last Name: <input onChange={this.handleChange} className="form-control" placeholder="Last Name" required id="lastName" />
                    Username: <input onChange={this.handleChange} className="form-control" value={this.state.username} id="username" readonly="true" required />
                    Password: <input onChange={this.handleChange} className="form-control" type="password" placeholder="Password" required id="password" />

                    <button class="form-control" type="submit">Update Account</button>
                    
                </form> 
                <form class="form-group" onSubmit={this.handleDel} className="form_size " action="">
                <button class="form-control" type="submit">Delete Account</button>
                </form>
            </div>

        );
    }
}

export default Account;