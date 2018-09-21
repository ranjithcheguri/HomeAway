import React, {Component} from 'react';
import Navbar2 from './Navbar2';

class LandingPage extends Component{
    constructor(props){
        super(props);
        console.log("Inside LandingPage");
    }
    render(){
        return(
            <div>
                <div class="jumbotron">
                <Navbar2/>
                    <div class="img"></div>
                        <div class="container landingContainer">
                            <div class="row">
                                <div class="col-lg-12">
                                    <h2>Jumbotron</h2>
                                    <p>Lorem ipsum is the best</p>
                                    <a href="#" class="btn btn-success btn-lg">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
   
}

export default LandingPage;