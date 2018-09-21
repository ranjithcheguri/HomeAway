import React, {Component} from 'react';
import styles from '../App.css'
import { Redirect } from 'react-router-dom'


class Navbar2 extends Component{
    constructor(props){
        super(props);
        console.log("Inside Navbar2");

        this.state={
            redirectVar:false
        }
        console.log("Inside Navbar2");
        this.handleProperty = this.handleProperty.bind(this);
    }

    handleProperty=(e)=>{
        this.setState({
            redirectVar:true
        })
    }

    render(){

        var x;
        if(this.state.redirectVar){
            x= <Redirect to='/ListProperty' />
         }
 
        return(
            <div>
                {x}           
                <div class="navbarContainer2">
                    <nav class="navbar">
                        <div class="container-fluid">
                            <div class="navbar-header">
                            <a class="navbar-brand" href="http://localhost:3000"><h2>HomeAway</h2></a> 
                            </div>
                            <ul class="nav navbar-nav navbar-right">
                            <li><a href="#"><span>Login</span></a></li>
                            <li><a href="#"><span></span>Help</a></li>
                            <li><a><span onClick={this.handleProperty} class="alignCenter">List your property</span></a></li>
                            <li><a href="#"><img class="homeLogo" alt="logo here" src={ require('../images/home.jpg')}></img></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar2;