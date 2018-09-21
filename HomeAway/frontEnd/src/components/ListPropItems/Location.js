import React,{Component} from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

class Location extends Component{
constructor(props){
    super(props);
    console.log("Inside ListProperty/Location");
}

render(){
    return(
        <div class="container-fluid">
            <div class="locationHeader">
                <h4>Verify the location of your rental</h4>
            </div>
            <div class="locationBody">
                <form class="form-group">
                    <div class="form_element">
                        <ReactFlagsSelect class="form-control" defaultCountry="US" />
                    </div>
                    <input class="form-control form_element" type="text" placeholder="Street Address"></input>
                    <input class="form-control form_element" type="text" placeholder="Apt/building No. etc"></input>
                    <input class="form-control form_element" type="text" placeholder="City"></input>
                    <input class="form-control form_element" type="text" placeholder="State"></input>
                    <input class="form-control form_element" type="text" placeholder="Zipcode"></input>  
                    <div>
                        <button class=" col-lg-offset-2 col-lg-2 btn btn-danger">Cancel</button>
                        <button class="col-lg-2  col-lg-offset-4 btn btn-primary">Next</button>
                    </div>              
                </form>
            </div>
        </div>
        
    );
}
}

export default Location;