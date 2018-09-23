import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import LandingPage2 from './LandingPage2';
import ListProperty from './ListProperty';
import SignUp from './SignUp';
import OwnerLogin from './OwnerLogin';
import Profile from './Profile';


class Menu extends Component {
    constructor(props){
        super(props);
        console.log("Inside Menu");
      }


    render(){
        return(
            <div>
                {/* component with small 'c' */}
                <Route path="/" component={Navbar}/>
                <Route path="/login" component={Login}/>
                {/* <Route path="/landingpage2" component={LandingPage2} />            */}
                <Route path="/navbar2" component={Navbar2} />
                <Route path="/footer" component={Footer}/>
                <Route path="/listProperty" component={ListProperty}/>
                <Route path="/SignUp" component={SignUp}/>
                <Route path="/OwnerLogin" component={OwnerLogin}/>
                <Route path="/Profile" component={Profile}/>
            </div>
        );
    }
}
export default Menu;