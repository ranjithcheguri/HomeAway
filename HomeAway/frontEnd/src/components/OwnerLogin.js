import React, { Component } from 'react';
import Footer from './Footer';

class OwnerLogin extends Component {
    constructor(props) {
        super(props);
        console.log("Inside OwnerLogin");
    }

    render() {
        return (
            <div class="loginPage_bg">
                <div class="container">
                    <center>
                        <div class="col-lg-offset-2 col-lg-4">
                            <img class="ownerlogo" alt="logo here" src={require('../images/ownerLogin.PNG')}></img>
                        </div>
                        <div class="formContainer col-lg-offset-1 col-lg-4">
                            <div class="formHeading">
                                <h3>Owner Login</h3>
                            </div>
                            <div class="form-group">
                                <form>
                                    <input class="form-control form_element" type="text" placeholder="Email address"></input>
                                    <input class="form-control form_element" type="password" placeholder="password"></input>
                                    <a class="float_left" href="#">Forgot Password?</a>
                                    <br></br>
                                    <button class="form_element btn_login btn btn-lg btn-block" type="submit">Log In</button>
                                    <div class="float_left">
                                        <input class="form-check-input" type="checkbox"></input>
                                        <label class="form-check-label">Keep me signed in</label>
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

export default OwnerLogin;

