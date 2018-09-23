import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';

class App extends Component {
  constructor(props){
    super(props);
    console.log("Inside App");
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        {/* to hide navigation bar first call landingpage route is set in 
        Home component without '/' this deafult path and remaining components have same path which are place in menu*/}
        {/* changing the order here will initialize '/' path which is menu and in 
      home /landingpage2 unwanted navbar will be displayed. */}
      <Home/>
      <Menu/>        
      </div>
      </BrowserRouter>      
    );
  }
}
export default App;
