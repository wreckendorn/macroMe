import React, { Component } from 'react';
import { BrowserRouter as Router, browserHistory, Route, Switch, Redirect, withRouter } from "react-router-dom";
import API from "../../utils/API";
import Auth from '../../modules/Auth';
import Macros from "../Macros"

class Login extends Component {

      state = {
        userName: "",
        password: "",
        uID: "",
        redirectToReferrer: false
      };

    componentDidMount = () => {
        const auth = Auth.isUserAuthenticated()
        if(auth === true){
            this.setState({
                redirectToReferrer: true
            })
        }
    };

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
        else if (!this.state.password.length) {
          alert("Fill out that password, yo");
        } 
        else {
            API.loginUser({
                username: this.state.userName, 
                password: this.state.password
            })
            .then(res => {
                Auth.authenticateUser(res.data)
                this.setState({ redirectToReferrer: true, ID: res.data.id_id })
            })
            .catch(err => alert ("username/password incorrect"))
        }
    };
    
    render() {
        const redirectToReferrer = this.state.redirectToReferrer;
        const id = this.state.uID;

        if (redirectToReferrer === true) {
            return <Redirect to={{
                pathname: "/macros/" + id,
                component: {Macros}
            }} />
        }

        return (
            <div className="container">
               
                <div className="row mt-5">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h2 className="mt-4 mb-3 text-center h1slow">oh, hi again</h2>
                        <h2 className="mt-4 mb-2 text-center h2slow">welcome back to macroMe</h2>
                        <h4 className="mt-4 mb-4 text-center h4slow">Let's login now.</h4>
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
                            <button className="btn btn-block btn-primary" value={this.state.redirectToReferrer} onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        );
    }
}

export default Login;
