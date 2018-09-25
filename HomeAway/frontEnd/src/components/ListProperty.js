import React, { Component } from 'react';
import Location from './ListPropItems/Location';
import Details from './ListPropItems/Details';
import BookingDetails from './ListPropItems/BookingDetails';
import Photos from './ListPropItems/Photos';
import Security from './ListPropItems/Security';
import Payment from './ListPropItems/Payment';
import Pricing from './ListPropItems/Pricing';
import Availability from './ListPropItems/PricingItems/Availability';
import Fees from './ListPropItems/PricingItems/Fees';
import Rental from './ListPropItems/PricingItems/Rental';
import Taxes from './ListPropItems/PricingItems/Taxes';

class ListProperty extends Component {
    constructor(props) {
        super(props);
        console.log("Inside ListProperty");
        this.state = {
            comp: "",
            //*********** Database Varibles *******

            country: "",
            street: "",
            building: "",
            city: "",
            state: "",
            zipcode: "",
            headline: "",
            description: "",
            type: "",
            bedrooms: "",
            accomodates: "",
            bathrooms: "",
            bookingoptions: "",
            photos: "",
            startdate: "",
            enddate: "",
            currency: "",
            rent: "",
            tax: "",
            cleaningfee: ""

            //*********** Database Varibles *******
        }
    }

    myCallback(dataFromChild) {
        console.log("In Parent, data from child", dataFromChild);
        this.setState({
            ...dataFromChild
        })
        console.log(this.state);
    }



    handleClick = (item, event) => {
        event.preventDefault();
        this.setState({
            comp: item
        })
    }

    componentDidMount() {
        this.setState({
            comp: <Location callbackFromParent={this.myCallback.bind(this)} />
        })
    }

    demoBtn = (e) => {
        e.preventDefault();
        console.log("State data right now : ",this.state);

    }

    // displayData=()=>{
    //     console.log(this.state);

    // }

    render() {
        return (
            <div class="listPropDiv container-fluid">
                <div class="col-lg-2"></div>
                <div class="propItems sidebar col-lg-2">
                    <ul class="nav nav-sidebar">
                        <li>
                            <h3 onClick={this.demoBtn.bind(this)}>Welcome</h3>
                        </li>
                        <li>
                            <a onClick={this.handleClick.bind(this, <Location callbackFromParent={this.myCallback.bind(this)} />)} value="<Location/>">Location</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick.bind(this, <Details callbackFromParent={this.myCallback.bind(this)} />)} value="<Details/>">Details</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick.bind(this, <BookingDetails callbackFromParent={this.myCallback.bind(this)} />)} value="<BookingDetails/>">Booking Options</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick.bind(this, <Photos callbackFromParent={this.myCallback.bind(this)} />)} value="<Photos/>">Photos</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick.bind(this, <Security callbackFromParent={this.myCallback.bind(this)} />)} value="<Security/>">Security</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick.bind(this, <Payment callbackFromParent={this.myCallback.bind(this)} />)} value="<Payment/>">Payment</a>
                        </li>
                        <li class="">
                            <ul>
                                <li>
                                    <a onClick={this.handleClick.bind(this, <Availability callbackFromParent={this.myCallback.bind(this)} />)}>Availability</a>
                                </li>
                                <li>
                                    <a onClick={this.handleClick.bind(this, <Rental callbackFromParent={this.myCallback.bind(this)} />)}>Rental</a>
                                </li>
                                <li>
                                    <a onClick={this.handleClick.bind(this, <Taxes callbackFromParent={this.myCallback.bind(this)} />)}>Taxes</a>
                                </li>
                                <li>
                                    <a onClick={this.handleClick.bind(this, <Fees callbackFromParent={this.myCallback.bind(this)} />)}>Fees</a>
                                </li>
                            </ul>
                            {/* <a onClick={this.handleClick.bind(this,<Pricing/>)} value="<Pricing/>">Pricing</a> */}
                        </li>
                    </ul>
                </div>
                <div class="ItemDetails col-lg-6">
                    {this.state.comp}
                </div>
                <div class="col-lg-2"></div>
            </div>
        );
    }


}

export default ListProperty;