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
            comp: ""
        }
    }

    handleClick = (item, event) => {
        event.preventDefault();
        this.setState({
            comp: item
        })
    }

    componentDidMount(){
        this.setState({
            comp:<Location/>
        })
    }

    render() {
        return (
            <div class="listPropDiv container-fluid">
                <div class="col-lg-2"></div>
                <div class="propItems sidebar col-lg-2">
                    <ul class="nav nav-sidebar">
                        <li>
                            <h3>Welcome</h3>
                        </li>
                        <li>
                            <a onClick={this.handleClick.bind(this, <Location />)} value="<Location/>">Location</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick.bind(this, <Details />)} value="<Details/>">Details</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick.bind(this, <BookingDetails />)} value="<BookingDetails/>">Booking Options</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick.bind(this, <Photos />)} value="<Photos/>">Photos</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick.bind(this, <Security />)} value="<Security/>">Security</a>
                        </li>
                        <li>
                            <a onClick={this.handleClick.bind(this, <Payment />)} value="<Payment/>">Payment</a>
                        </li>
                        <li class="">
                            <ul>
                                <li>
                                    <a onClick={this.handleClick.bind(this, <Availability />)}>Availability</a>
                                </li>
                                <li>
                                    <a onClick={this.handleClick.bind(this, <Rental />)}>Rental</a>
                                </li>
                                <li>
                                    <a onClick={this.handleClick.bind(this, <Taxes />)}>Taxes</a>
                                </li>
                                <li>
                                    <a onClick={this.handleClick.bind(this, <Fees />)}>Fees</a>
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