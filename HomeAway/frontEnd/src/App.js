import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Menu from './components/Menu';

class App extends Component {
  constructor(props){
    super(props);
    console.log("Inside App");
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Menu/>
      </div>
      </BrowserRouter>      
    );
  }
}
export default App;
