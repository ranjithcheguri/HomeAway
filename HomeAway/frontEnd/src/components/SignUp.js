import React, { Component } from 'react';
import Footer from './Footer';

class SignUp extends Component {
    constructor(props) {
        super(props);
        console.log("Inside Login");
    }

    render() {
        return (
            <div class="loginPage_bg">
                <div class="container">
                    <center>
                        <div class="loginHeader">
                            <h2>Sign up for HomeAway</h2>
                            <p>Already have an account?<a href="#"><span> Log in</span></a></p>
                        </div>
                        <div class="formContainer col-lg-4 col-lg-offset-4 col-md-5 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
                            <div class="form-group">
                                <form>
                                    <div>
                                        <input class="form-control  form_element" type="text" placeholder="First Name"></input>
                                        <input class="form-control  form_element" type="text" placeholder="Last Name"></input>
                                    </div>
                                    <input class="form-control form_element" type="text" placeholder="Email address"></input>
                                    <input class="form-control form_element" type="password" placeholder="password"></input>

                                    <button class="form_element btn_login btn btn-lg btn-block" type="submit">Sign Me Up</button>
                                    <div class="or">

                                    </div>
                                    <div class="social_login">
                                        <button class="form_element btn_fb btn btn-lg btn-block" >Log in with Facebook</button>
                                        <button class="form_element btn_google btn btn-lg btn-block">Log in with Google</button>
                                    </div>
                                    <div class="">
                                        <label class="form_footer">We don't post anything without your permission.</label>
                                    </div>
                                    <div class="">
                                        <label class="form_footer">By creating an account you are accepting our Terms and Conditions and Privacy Policy.
</label>
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

export default SignUp;

