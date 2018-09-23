import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import LandingPage2 from './LandingPage2';

class Home extends Component {
    constructor(props){
        super(props);
        console.log("Inside Menu");
      }

      render(){
        return(
            <div>
                <Route path="/landingpage2" component={LandingPage2} />           
            </div>
        );
    }

}

export default Home;