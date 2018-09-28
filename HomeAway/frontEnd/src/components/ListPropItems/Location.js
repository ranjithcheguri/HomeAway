import React, { Component } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import Details from './Details';


class Location extends Component {
    constructor(props) {
        super(props);
        console.log("Inside ListProperty/Location");

        this.state = ({
            comp:<Details callbackFromParent={this.myCallback}/>,
            country: "US",
            street: "",
            building: "",
            city: "",
            zipcode: ""
        })

        this.sendDatatoParent = this.sendDatatoParent.bind(this);
        this.getData = this.getData.bind(this);
        }

    onSelectFlag(countryCode) {
        console.log(countryCode);
        this.setState({
            country: countryCode
        })
    }

    getData = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        if (e.target.name == "country") {
            this.setState({
                country: e.target.options[e.target.selectedIndex].text

            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }
    sendDatatoParent = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.callbackFromParent(this.state);  
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="locationHeader">
                    <h4>Verify the location of your rental</h4>
                </div>
                <div class="locationBody">
                    <form class="form-group">
                        <div class="form_element">
                            <ReactFlagsSelect onSelect={this.onSelectFlag.bind(this)} value="US" name="country" class="form-control" defaultCountry="US" />
                        </div>
                        <input onChange={this.getData} name="street" class="form-control form_element" type="text" placeholder="Street Address"></input>
                        <input onChange={this.getData} name="building" class="form-control form_element" type="text" placeholder="Apt/building No. etc"></input>
                        <input onChange={this.getData} name="city" class="form-control form_element" type="text" placeholder="City"></input>
                        <input onChange={this.getData} name="state" class="form-control form_element" type="text" placeholder="State"></input>
                        <input onChange={this.getData} name="zipcode" class="form-control form_element" type="text" placeholder="Zipcode"></input>
                        <div>
                            <button class=" col-lg-offset-2 col-lg-2 btn btn-danger">Cancel</button>
                            <button onClick={this.sendDatatoParent} class="col-lg-2  col-lg-offset-4 btn btn-primary">Next</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Location;