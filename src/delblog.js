import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import config from './config';


class deleteblog extends Component {
    constructor() {
        super();
        this.state = {

            username: sessionStorage.getItem("loggedUser"),

            id: null
        }
    }


    deleteblog = () => {
        axios.delete(config.api + '/movies1/api/blog/deleteBlog/' + this.state.id + "/" + this.state.username)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.deleteblog();

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {


        return (

            <div>
                <h2>Delete Blog</h2>
                <form class="form-group" onSubmit={this.handleSubmit} className="form_size " action="">
                    ID: <input onChange={this.handleChange} className="form-control" placeholder="Title" id="id" required />
                    Author: <input onChange={this.handleChange} className="form-control" value={this.state.username} id="author" required />

                    <button class="form-control" type="submit">Delete Post</button>

                </form>
            </div>

        );
    }
}

export default deleteblog;