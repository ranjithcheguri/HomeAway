import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router-dom';

class BookingHistory extends Component {

    constructor(props) {
        super(props);
        console.log("Inside Booking History");
        this.state = {
            username: sessionStorage.getItem('username'),
            propertyData: "",
            isEmpty: true
        }
    }


    async componentDidMount() {
        const data = {
            username: this.state.username,
        }
        await axios.post('http://localhost:3002/bookingHistory/', data)
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        propertyData: response.data,
                        isEmpty: false
                    })
                }
                console.log(response);
            });
    }

    render() {

        var details = "";
        var pageLayout = "";
        if (!this.state.isEmpty) {
            details = this.state.propertyData.map((property, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{property.headline}</td>
                        <td>{property.city}</td>
                        <td>{property.startdate.substring(0,10)}</td>
                        <td>{property.enddate.substring(0,10)}</td>
                        <td>{property.rent}</td>
                        <td><button class="btn btn btn-danger">CANCEL</button></td>
                    </tr>
                )
            })
        } else {
            return (<div>Booking data not found</div>)
        }

        if (cookie.load('TravelerCookie')) {
            pageLayout = ( <div class="bookPropertyContainer">
            <div class="container-fluid shadowBg">
                <center><h2 class="">My Booking History</h2></center>
                <table class="table table-bordered ">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Property Name</th>
                            <th>City</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Rent</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*Display the Tbale row based on data recieved*/}
                        {details}
                    </tbody>
                </table>
            </div>
            </div>)

        }else{
            this.props.history.push('/Login');
        }

        return (
            <div>{pageLayout}</div>
        )

    }
}
export default BookingHistory;