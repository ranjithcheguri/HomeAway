import React, {Component} from 'react';
import {Route,Redirect} from 'react-router';
import styles from '../App.css'

class Navbar extends Component{
    constructor(props){
        super(props);
        console.log("Inside Navbar");
    }

        render(){
        return(
            <div class="navbarContainer">
                <nav class="navbar">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <a class="navbar-brand" href="http://localhost:3000/"><img class="logo" alt="logo here" src={ require('../images/logo.png')}></img></a>
                        </div>
                        <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><img class="homeLogo" alt="logo here" src={ require('../images/home.jpg')}></img></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;