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
        let actuallyThis = this;
        axios.delete(config.api + '/movies1/api/blog/deleteBlog/' + this.state.id + "/" + this.state.username)
            .then(function (response) {
                actuallyThis.setState({
                    message: response.data.message

                })
            })
            .catch(function (error) {
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
                <p>{this.state.message}</p>
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