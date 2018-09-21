import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import LandingPage from './LandingPage';
import ListProperty from './ListProperty';
import Location from './ListPropItems/Location';
import Details from './ListPropItems/Details';
import BookingDetails from './ListPropItems/BookingDetails';
import Photos from './ListPropItems/Photos';
import Security from './ListPropItems/Security';
import Payment from './ListPropItems/Payment';
import Pricing from './ListPropItems/Pricing';
import SignUp from './SignUp';


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
                <Route path="/login" component={Login} />
                <Route path="/landingpage" component={LandingPage} />
                <Route path="/navbar2" component={Navbar2} />
                <Route path="/footer" component={Footer}/>
                <Route path="/listProperty" component={ListProperty}/>
                <Route path="/SignUp" component={SignUp}/>
                {/* <Route path="/listProperty/Location" component={Location}/>
                <Route path="/listProperty/Details" component={Details}/>
                <Route path="/listProperty/BookingDetails" component={BookingDetails}/>
                <Route path="/listProperty/Photos" component={Photos}/>
                <Route path="/listProperty/Security" component={Security}/>
                <Route path="/listProperty/Payment" component={Payment}/>
                <Route path="/listProperty/Prcing" component={Pricing}/>
                 */}
            </div>
        );
    }
}
export default Menu;