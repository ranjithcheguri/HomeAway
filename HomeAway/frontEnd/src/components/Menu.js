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
import OwnerSignUp from './OwnerSignUp';
import DisplayProperty from './DisplayProperty';
import BookingHistory from './BookingHistory';
import BookProperty from './BookPropety';
import Details from './ListPropItems/Details';
import BookingDetails from './ListPropItems/BookingDetails';
import OwnerDashboard from './OwnerDashboard';
import ViewProfile from './ViewProfile';


class Menu extends Component {
    constructor(props){
        super(props);
        console.log("Inside Menu");
      }


    render(){
        return(
            <div>
                {/* component with small 'c' */}
                <Route exact path="" component={LandingPage2}/>
                <Route path="/" component={Navbar}/>
                <Route path="/login" component={Login}/>
                <Route path="/navbar2" component={Navbar2} />
                <Route path="/footer" component={Footer}/>
                <Route path="/listProperty" component={ListProperty}/>
                <Route path="/SignUp" component={SignUp}/>
                <Route path="/OwnerLogin" component={OwnerLogin}/>
                <Route path="/Profile" component={Profile}/>
                <Route path="/OwnerSignUp" component={OwnerSignUp}/>
                <Route path="/DisplayProperty" component={DisplayProperty}/>
                <Route path="/BookProperty" component={BookProperty}/>
                <Route path="/BookingHistory" component={BookingHistory}/>
                <Route path="/OwnerDashboard" component={OwnerDashboard}/>
                <Route path="/ViewProfile" component={ViewProfile}/>


            </div>
        );
    }
}
export default Menu;