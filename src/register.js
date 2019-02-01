import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import config from './config';


class reg extends Component {
    constructor() {
        super();
        this.state = {
            username: null,
            firstName: null,
            lastName: null,
            password: null,
            userLevel: "0"
        }
    }


    addUser = () => {
        axios.post(config.api + '/movies1/api/blog/addAccount', {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            userLevel: this.state.userLevel
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
        this.addUser();

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {


        return (

            <div>

                <form class="form-signin" onSubmit={this.handleSubmit} action="">

                    <h1 class="h3 mb-3 font-weight-normal">Register*</h1>
                    <label for="username" class="sr-only">Username*</label>
                    <input onChange={this.handleChange} type="username" id="username" class="form-control" placeholder="Username" required="true" autofocus="" />
                    <label for="fName" class="sr-only">First Name*</label>
                    <input onChange={this.handleChange} type="fName" id="firstName" class="form-control" placeholder="First Name" required="true" autofocus="" />
                    <label for="lName" class="sr-only">Last Name*</label>
                    <input onChange={this.handleChange} type="lName" id="lastName" class="form-control" placeholder="Last Name" required="true" />
                    <label for="inputPassword" class="sr-only">Password*</label>
                    <input onChange={this.handleChange} type="password" id="password" class="form-control" placeholder="Password" required="true" />
                    <div class="checkbox mb-3">



                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>

                </form>

            </div>
        );
    }
}

export default reg;