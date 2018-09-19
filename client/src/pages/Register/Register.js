import React, { Component } from 'react';
import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import Login from "../Login"
import "./style.css";

class Register extends Component {
    state = {
        userName: "",
        password: "",
        created: false
    };


    componentDidMount() {
        console.log("user created? " + this.state.created);
    }
  
    handleChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "password") {
          value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
         [name]: value
        });
    };
    
    handleSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.userName) {
          alert("Fill out your username please!");
        } 
        else if (this.state.password.length < 4) {
          alert(
            `Choose a more secure password ${this.state.userName} `
          );
        } 
        
        else {
        API.registerUser({
            username: this.state.userName, 
            password: this.state.password
        })
        .then(res => {
            this.setState({ created: true })
        })
        .catch(function (error) {
        });
      };
    }
    
    render() {
        const created = this.state.created;

        if(created === true) {
           return <Redirect to='/login'/>
        }

        return (
            <div className="container">
               
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 test">
                        <h1 className="mt-4 mb-1 text-center h1slow">hi.</h1>
                        <h2 className="mt-4 mb-2 text-center h2slow">welcome to macroMe</h2>
                        <h4 className="mt-4 mb-4 text-center h4slow">Let's create a username and password.</h4>
                        <form className="form formslow">
                            <div className="form-group">
                    
                                <input
                                    value={this.state.userName}
                                    className="form-control"
                                    name="userName"
                                    onChange={this.handleChange}
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="form-group">
                            
                                <input
                                    value={this.state.password}
                                    className="form-control"
                                    name="password"
                                    onChange={this.handleChange}
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <div className="col-3"></div>
                 </div>
            </div>
        );
    }
}

export default Register;
