import React, { Component } from 'react';
import Footer from './Footer';

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log("Inside Profile");
    }

    render() {
        return (
            <div class="loginPage_bg">
                <div class="container-fluid profileContainer">
                    <div class="profileHeader">
                        <img class="profileLogo" alt="logo here" src={require('../images/profile.PNG')}></img>
                        <h1>user name</h1>
                        <p>Member since 2018</p>
                    </div>
                    <div class="profileBody">
                        <div class="drawBorder col-lg-7">
                            <div class="col-lg-12">
                                <h2 class="col-lg-6 alignLeft">Profile information</h2>
                                <span class="fa fa-lg fa-facebook col-lg-6 alignRight">Import</span>
                            </div>
                            <form class="form-group">
                                <div class="col-lg-6">
                                    <div class="">
                                        <input class="form-control form_element" type="text" placeholder="First name"></input>
                                    </div>
                                    <div class="">
                                        <input class="form-control form_element" type="text" placeholder="Last name or initial"></input>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="">
                                        <textarea class="form-control form_element" type="text" placeholder="About me"></textarea>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="">
                                        <input class="form-control form_element" type="text" placeholder="My CIty,My COuntry"></input>
                                    </div>
                                    <div class="">
                                        <input class="form-control form_element" type="text" placeholder="Company"></input>
                                    </div>
                                    <div class="">
                                        <input class="form-control form_element" type="text" placeholder="School"></input>
                                    </div>
                                    <div class="">
                                        <input class="form-control form_element" type="text" placeholder="Hometown"></input>
                                    </div>
                                    <div class="">
                                        <input class="form-control form_element" type="text" placeholder="Languages"></input>
                                    </div>
                                    <div class="">
                                        <select class="form-control ">
                                            <option selected>Gender</option>
                                            <option value="Male">One</option>
                                            <option value="Female">Two</option>
                                            <option value="Other">Three</option>
                                        </select>
                                    </div>
                                </div>
                                {/* dummy div */}
                                <div class="col-lg-12"></div>
                                {/* <div class="col-lg-6 form-check checkbox-slider--default">
                                    <label class="">
                                        <input type="checkbox" checked></input>
                                        <span class="indicator-success">checked</span>
                                    </label>
                                </div> */}
                                {/* dummy div */}
                                <div class="col-lg-12"></div>
                                <div class="col-lg-6">
                                    <input type="text" placeholder="PhoneNumber" class="form-control form_element"></input>
                                </div>
                                {/* dummy div */}
                                <div class="col-lg-12"></div>
                                <div class="col-lg-2 align-self-start saveProfile">
                                    <button class="btn btn-primary" type="submit">Save Changes</button>
                                </div>
                            </form>
                            {/* dummy div */}

                        </div>
                        <div class="container-fluid col-lg-offset-1 col-lg-4">
                            <div class="drawBorder">
                                <img class="emailImage" alt="logo here" src={require('../images/profile_email.PNG')}></img>
                            </div>
                            <div class="drawBorder alignCenter">
                                <button class="btn btn-lg btn-primary-outline" type="">View Profile</button>
                            </div>
                            <div class="drawBorder alignCenter">
                                <img class="profileImage" alt="logo here" src={require('../images/profile_image.PNG')}></img>
                            </div>
                        </div>
                        <div class="col-lg-12"></div>


                    </div>
                </div>
                <Footer />
            </div>

        );
    }

}

export default Profile;

