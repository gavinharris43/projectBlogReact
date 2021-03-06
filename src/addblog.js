import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import config from './config';



class addblog extends Component {
    constructor() {
        super();
        this.state = {
            title: null,
            username: (sessionStorage.getItem("loggedUser")),
            content: null,
            date: null,
            category: null,
            message: null
        }
    }

    addblog = () => {
        let actuallyThis = this;
        axios.post(config.api + '/movies1/api/blog/createBlog', {
            title: this.state.title,
            username: this.state.username,
            content: this.state.content,
            date: this.state.date,
            category: this.state.category
        })
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
        this.addblog();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {


        return (

            <div>
                <h2>New Blog</h2>
                <form class="form-group" onSubmit={this.handleSubmit} className="form_size " action="">
                    <p>{this.state.message}</p>
                    Title: <input onChange={this.handleChange} className="form-control" placeholder="Title" id="title" required />
                    Author: <input onChange={this.handleChange} className="form-control" value={this.state.username} id="author" readonly required />
                    Content: <textarea onChange={this.handleChange} className="form-control" maxLength="3000" placeholder="Content" required id="content" rows="3" />
                    Date: <input onChange={this.handleChange} className="form-control" type="date" placeholder="Date" id="date" required />
                    Category: <select required name="category" id="category" className="form-control" onChange={this.handleChange} >

                        <option value="">Please Select</option>
                        <option value="TS">Taylor Swift</option>
                        <option value="Guitar">Guitar</option>
                    </select>

                    <button class="form-control" type="submit">Add Post</button>

                </form>
            </div>

        );
    }
}

export default addblog;