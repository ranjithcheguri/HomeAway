import React,{Component} from 'react';
import Rental from './Rental';

class Availability extends Component{
constructor(props){
    super(props);
    console.log("Inside ListProperty/Pricing/Availability");

    this.state={
        comp : <Rental callbackFromParent={this.myCallback} />,
        startdate: "",
        enddate: "",
    }
}

getData=(e)=>{
    e.preventDefault();
    //console.log(e.target.name);
        this.setState({
            [e.target.name]:e.target.value
        })   
}

sendDatatoParent=(e)=>{
    e.preventDefault();
    console.log(this.state);
    this.props.callbackFromParent(this.state);
}

render(){
    return(
        <div class="container-fluid">
            <div class="locationHeader availHeader">
                <h3>Availability</h3>
                <p>Already know when you would like your property to be available?</p>
                <p>You can also make changes after publishing your listing.</p>
            </div>
            <div>
                <h4>Select a starting point for setting up your availability</h4>
                <div class="">
                    <div class="form_element col-lg-6">
                        <label>Start date</label>
                        <input onChange={this.getData.bind(this)} name="startdate" class="form-control" type="date"></input>
                    </div>
                    <div class="form_element col-lg-6">
                        <label>End date</label>
                        <input onChange={this.getData.bind(this)} name="enddate" class="form-control" type="date"></input>
                    </div>
                </div>
            </div>
            <div class="">
                <button class=" col-lg-offset-2 col-lg-2 btn btn-danger">Cancel</button>
                <button onClick={this.sendDatatoParent} class="col-lg-2  col-lg-offset-4 btn btn-primary">Next</button>
            </div>              

        </div>
    );
}
}

export default Availability;