import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import CarouselHA from './CarouselHA';
import cookie from 'react-cookies';

class LandingPage2 extends Component {
    constructor(props) {
        super(props);
        console.log("inside landingPage2");
        this.state = {
        }
    }

    componentDidMount() {
        this.setState({
        })

    }

    handleSignOut = (e) => {
        cookie.remove('TravelerCookie', { path: '/' });
        cookie.remove('OwnerCookie', { path: '/' });
        this.setState({
        })
    }

    render() {
        
    // ******************** REDIRECT TO LIST PROP USING COOKIE ****************************

        let renderListProp = null;
        if (cookie.load('OwnerCookie')) {
            renderListProp = (<Link to="/ListProperty">
                <button class="btn btn-lg listYourProperty">List your property</button>
            </Link>)

        } else {
            renderListProp = (<Link to="/OwnerLogin">
                <button class="btn btn-lg listYourProperty">List your property</button>
            </Link>)
        }

// ************ check cookie and handle sign in and sign out ********************
        //if Cookie is set render Logout Button  

        let loggedIn = null;
        if (cookie.load('TravelerCookie')) {
            console.log("Able to read cookie");
            loggedIn = (
                <div class="dropdown floatRight align-center loginList">
                    <button class="btn btn-default btn-lg dropdown-toggle whiteText transparentBtn" type="button" data-toggle="dropdown">Login
                <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <Link to='/Profile'>Profile</Link>
                        </li>
                        <li>
                            <a onClick={this.handleSignOut.bind(this)}>SignOut</a>
                        </li>
                    </ul>
                </div>
            );
        }
        else if (cookie.load('OwnerCookie')) {
            console.log("Able to read cookie");
            loggedIn = (
                <div class="dropdown floatRight align-center loginList">
                    <button class="btn btn-default btn-lg dropdown-toggle whiteText transparentBtn" type="button" data-toggle="dropdown">Login
                <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <Link to='/Profile'>OwnerProfile</Link>
                        </li>
                        <li>
                            <a onClick={this.handleSignOut.bind(this)}>SignOut</a>
                        </li>
                    </ul>
                </div>
            );
        } else {
            //Else display login button
            console.log("Not Able to read cookie");
            loggedIn = (
                <div class="dropdown floatRight align-center loginList">
                    <button class="btn btn-default btn-lg dropdown-toggle whiteText transparentBtn" type="button" data-toggle="dropdown">Login
                            <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <Link to='/Login'>Traveler Login</Link>
                        </li>
                        <li>
                            <Link to='/OwnerLogin'>Owner Login</Link>
                        </li>
                    </ul>
                </div>
            )
        }

        return (
            <div>
                <div class="bg-img">
                    <div class="landingPageNavbar">
                        <Link to={"/"}><a href="#"><img class="logo" alt="logo here" src={require('../images/logo-bceheader-white.svg')}></img></a></Link>
                        <div class="floatRight">
                            <a href="#"><img class="transparentLogo" alt="logo here" src={require('../images/logo_transparent.png')}></img></a>
                        </div>
                        <div class="floatRight" style={{ paddingRight: 10 + 'px' }}>
                        {renderListProp}
                        </div>
                        {loggedIn}
                        {/* <div class="dropdown floatRight align-center loginList">
                            <button class="btn btn-default btn-lg dropdown-toggle whiteText transparentBtn" type="button" data-toggle="dropdown">Login
                            <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link to='/Login'>Traveler Login</Link>
                                </li>
                                <li>
                                    <Link to='/OwnerLogin'>Owner Login</Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                    <div class="container-fluid landingPageBody">
                        <h1 class="whiteText">Book beach houses, cabins,</h1>
                        <h1 class="whiteText">condos and more, worldwide</h1>
                        <div class="">
                            <form class=" col-lg-12 form-group form-inline">
                                <input type="text" class="custom_HA form-control col-lg-5" style={{ marginLeft: -10 + 'px' }} placeholder=" where to you want to go ?"></input>
                                <input type="date" class="custom_HA form-control col-lg-1" placeholder="Arrive"></input>
                                <input type="date" class="custom_HA form-control col-lg-1" placeholder="Depart"></input>
                                <input type="text" class="custom_HA form-control col-lg-1" placeholder="Guests"></input>
                                <button class="col-lg-1 searchButton btn btn-primary">Search</button>
                            </form>
                        </div>
                    </div>
                    <div class="landingPageDesc container-fluid">
                        <div class="whiteText col-lg-4">
                            <h3>Your whole vacation starts here</h3>
                            <h5>Choose a rental from the world's best selection</h5>
                        </div>
                        <div class="whiteText col-lg-4">
                            <h3>Book and stay with confidence</h3>
                            <h5><u>Secure payments, peace of mind</u></h5>
                        </div>
                        <div class="whiteText col-lg-4">
                            <h3>Your vacation your way</h3>
                            <h5>More space, more privacy, no compromises</h5>
                        </div>

                    </div>
                </div>
                <CarouselHA />
            </div>
        );
    }
}

export default LandingPage2;