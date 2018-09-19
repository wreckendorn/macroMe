import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Macros from "./pages/Macros";
import NoMatch from "./pages/NoMatch";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Auth from "./modules/Auth";

// const AuthService = {
//   isAuthenticated: false,
//   Auth.isUserAuthenticated(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100)
//   },
//   logout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }

class Routes extends Component {
  state = {
    isLoggedIn: false,
    isLoggedOut: true
    
  }

  // componentWillMount(){
  //   if(Auth.isUserAuthenticated()) {
  //         this.setState({
  //           isLoggedIn: true
  //         })
  //       }
  //       else{
  //        this.setState({
  //           isLoggedIn: false
  //         })
  //       }
  
  // }
  // checkAuth(){
  //   
  // }


  render() {

 
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/macros" component={Macros} />
{/*           
          <Route exact path="/macros" render={() => (
            this.state.isLoggedIn ? (
              <Redirect to="/login"/>
            ) : (
              <Macros/>
            ) 
          )}/> */}
          <Route exact path="/macros/:id" component={Macros} />
          <Route exact path="/register" component={Register} />
          <Route path="/login" component={Login} />
          {/* <Route exact path="/login" render={() => (
            this.state.isLoggedIn ? (
              <Redirect to="/macros"/>
            ) : (
              <Login/>
            ) 
          )}/> */}
        
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}
}

  export default Routes;