import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class BookProperty extends Component {
    constructor(props) {
        super(props);
        console.log("Inside Book property", this.props.location.state);
        this.state = {
            key: this.props.location.state.key,
            photosData: this.props.location.state.photosData,
            propertyData: this.props.location.state.propertyData
        }
        console.log("Inside Book property updated state", this.state.photosData[this.state.key]);
    }

    returnImage(index) {
        if (Array.isArray(this.state.photosData[this.state.key]));
        return this.state.photosData[this.state.key][index];
    }

    render() {
        //var photos = []
        //console.log(this.state.photosData[this.state.key].length);
        var carouselImages = this.state.photosData[this.state.key-1].map((image, index) => {
            if (index == 0) {
                return (
                    <div class="item active container-img">
                        <img class="" alt="No Image !" src={'data:image/jpeg;base64,' + image}></img>
                    </div>
                )
            } else {
                return (<div class="item  container-img">
                    <img class="" alt="No Image !" src={'data:image/jpeg;base64,' + image}></img>
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
                </div>
                <div class="col-lg-4">
                    
                </div>
            </div>
        )
    }
}
export default BookProperty;
