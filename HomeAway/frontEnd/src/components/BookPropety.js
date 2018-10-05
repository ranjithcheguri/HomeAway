import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';


class BookProperty extends Component {
    constructor(props) {
        super(props);
        console.log("Inside Book property", this.props.location.state);
        this.state = {
            key: this.props.location.state.key,
            photosData: this.props.location.state.photosData,
            propertyData: this.props.location.state.propertyData
        }
        console.log("Inside Book property updated state", this.state.photosData[this.state.key-1]);
    }

    returnImage(index) {
        if (Array.isArray(this.state.photosData[this.state.key-1]));
        return this.state.photosData[this.state.key-1][index];
    }

    returnPropertyData(i) {
        //directly not working, checking array and returing is only working.
        if (Array.isArray(this.state.propertyData[i]));
        return this.state.propertyData[i];
    }

     bookHomeBtn = async (e) =>  {
        e.preventDefault();
        const data = {
            //only key not key-1
            bookedKey:this.state.key,
            bookedUser:sessionStorage.getItem('username')
        }
        console.log(data);

       await axios.post('http://localhost:3001/bookProperty/', data)
            .then(response => {
                console.log(response);
            });

            this.props.history.push('/BookingHistory');

    }

    render() {
        //var photos = []
        //console.log(this.state.photosData[this.state.key].length);
        var carouselImages = this.state.photosData[this.state.key - 1].map((image, index) => {
            if (index == 0) {
                return (
                    <div class="item active ">
                        <img class="container-img" style={{ width: '100%', height: '576px' }} alt="No Image !" src={'data:image/jpeg;base64,' + image}></img>
                    </div>
                )
            } else {
                return (<div class="item  container-img">
                    <img class="" style={{ width: '100%', height: '576px' }} alt="No Image !" src={'data:image/jpeg;base64,' + image}></img>
                </div>)
            }
        })

        //console.log(photos);

        return (
            <div class="bookPropertyContainer container-fluid">
                <div class="container col-lg-8">
                    <div id="myCarousel" class="carousel slide " data-ride="carousel">
                        <div class="carousel-inner">
                            {carouselImages}
                        </div>
                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <div class="shadowBg">
                        <h2>{this.state.propertyData[this.state.key-1].headline}</h2>
                        <div class="paddingAll">
                            <div class="col-lg-12">
                                <span class="col-lg-3"><i class="fa fa-home fa-3x"></i></span>
                                <span class="col-lg-3"><i class="fa fa-bed fa-3x"></i></span>
                                <span class="col-lg-3"><i class="fa fa-users fa-3x"></i></span>
                                <span class="col-lg-3"><i class="fa fa-bath fa-3x"></i></span>
                            </div>
                            <div class="col-lg-12">
                                <span class="col-lg-3">{this.state.propertyData[this.state.key - 1].type}</span>
                                <span class="col-lg-3">{this.state.propertyData[this.state.key - 1].bedrooms}</span>
                                <span class="col-lg-3">{this.state.propertyData[this.state.key - 1].accomodates}</span>
                                <span class="col-lg-3">{this.state.propertyData[this.state.key - 1].bathrooms}</span>
                            </div>
                        </div>
                        <div class="borderDesc">
                            <span>{this.state.propertyData[this.state.key - 1].description}</span>
                        </div>
                    </div>

                </div>
                <div class="bookPropertyForm col-lg-4">
                    <div class="paddingAll"><i class="fa fa-usd fa-3x">{this.returnPropertyData(this.state.key - 1).rent}</i>&nbsp;avg/night</div>
                    <div class="paddingAll">4.6/5 Excellent.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Good for families</div>
                    <div class="paddingAll col-lg-12">
                        <div class="col-lg-6 ">
                            <input type="date" onChange={this.handleChange} name="checkInDate" class="form-control  form_element" placeholder="Check In"></input>

                        </div>
                        <div class="col-lg-6 ">
                            <input type="date" onChange={this.handleChange} name="checkOutDate" class="form-control form_element" placeholder="Check Out"></input>
                        </div>
                    </div>
                    <div class="paddingAll ">
                        <input type="text" class="form-control form_element" placeholder="Guests" ></input>
                    </div>
                    <div class="paddingAll">
                        <button class="btn btn-lg btn-primary blueButton" onClick={this.bookHomeBtn.bind(this)} type="submit">Request to Book</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default BookProperty;
