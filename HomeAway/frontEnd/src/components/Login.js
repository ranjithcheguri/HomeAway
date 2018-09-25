import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        console.log("Inside Login");
        this.state={
            email:"",
            password:"",
            redirectVar:false
        }
    }

    renderRedirect = () => {
        if (this.state.redirectVar) {
          return <Redirect to='/' />
        }
      }

    handleLogin = (e) => {

        console.log("Login Request Submitted");
      axios.defaults.withCredentials = true;
      axios.post('http://localhost:3001/login',this.state)
      .then(response=>{
        if(response.status === 200){
            console.log("Login successful");
            this.setState({
                redirectVar:true
            })
        }else{
            console.log("Invalid Login Credentials");
            this.setState({
            })
        }
      })
      //redirecting to home page
      //this.props.router.push("/");
      
        e.preventDefault();
    }

    handleChange = (e) => {
        this.setState({
            //square brackets must
            [e.target.name] : e.target.value
        })
    }


    render() {
        return (
            <div class="loginPage_bg">
            {this.renderRedirect()}
                <div class="container">
                    <center>
                        <div class="loginHeader">
                        {/* <Alert bsStyle="warning"></Alert> */}

                            <h2>Log in to HomeAway</h2>
                            <p>Need an account? <a href="#"><Link to="/SignUp"><span>Sign Up</span></Link></a></p>
                        </div>
                        <div class="formContainer col-lg-4 col-lg-offset-4 col-md-5 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
                            <div class="formHeading">
                                <h3>Account Login</h3>
                            </div>
                            <div class="form-group">
                                <form>
                                    <input class="form-control form_element" onChange={this.handleChange.bind(this)} name="email" type="text" placeholder="Email address"></input>
                                    <input class="form-control form_element" onChange={this.handleChange.bind(this)} name="password" type="password" placeholder="password"></input>
                                    <a class="float_left" href="#">Forgot Password?</a>
                                    <br></br>
                                    <button onClick={this.handleLogin.bind(this)} class="form_element btn_login btn btn-lg btn-block" type="submit">Log In</button>
                                    <div class="float_left">
                                        <input class="form-check-input" type="checkbox"></input>
                                        <label class="form-check-label">Keep me signed in</label>
                                    </div>
                                    <div class="or">

                                    </div>
                                    <div class="social_login">
                                        <button class="form_element btn_fb btn btn-lg btn-block" >Log in with Facebook</button>
                                        <button class="form_element btn_google btn btn-lg btn-block">Log in with Google</button>
                                    </div>
                                    <div class="">
                                        <label class="form_footer">We don't post anything without your permission.</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </center>
                </div>
                <Footer />
            </div>

        );
    }

}

export default Login;

