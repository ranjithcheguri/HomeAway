import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class DisplayProperty extends Component {
    constructor(props) {
        super(props);
        console.log("Inside Display Properties");
        //retrieving data from pushed history.
        console.log("search properties from landingPage", this.props.location.state);

        this.state = {
            photosData: [],
            propertyData: [],
            key: []
        }
    }

    async componentDidMount() {
        console.log("Downloading property details...");
        const data = {
            city: this.props.location.state.searchCity,
            searchdate: this.props.location.state.searchStartdate,
            enddate: this.props.location.state.searchEnddate,
            accomodates: this.props.location.state.searchAccomodates,
        }
        console.log("filters to query SQL", data);
        await axios.post('http://localhost:3001/displayProperty/', data)
            .then(response => {
                console.log("response from server", response.data);

                this.setState({
                    propertyData: response.data
                })
                console.log("property data in state updated just now : ", this.state);
            });

        //get multiple photo base64values and replace in photos
        await axios.post('http://localhost:3001/downloadPhotos/', "")
            .then(response => {
                console.log("response from server", response.data);

                this.setState({
                    photosData: response.data
                })
                console.log("photos downloaded", this.state.photosData);
            });
    }

    returnImage = (index) => {

        //return this.state.photosData[index][0];
        //console.log("is this array ?",this.state.photosData[index]);
        if (Array.isArray(this.state.photosData[index])) {
            //console.log("this is array : ",this.state.photosData[index]);
            return this.state.photosData[index][0];
        }
        else {
            //console.log("this is not array",this.state.photosData[index]);
            return this.state.photosData[index];
        }
    }

    getFloorSize(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    async redirectToBookProperty(Itemkey, e) {
        //e.preventDefault();
        await this.setState({
            key: Itemkey
        });
        console.log("clicked key", this.state.key);
        this.props.history.push('/BookProperty', this.state)
    }


    render() {
        var PropItems = "";
        console.log("data in renderer start", this.state.photosData);
        if (!!this.state.photosData) {
            PropItems = this.state.propertyData.map((item, index) => {
                return (
                    <div class="col-lg-12 displayItem marginAll marginRight">
                        <div class="col-lg-4">
                            <img class="displayPropertyImage" alt="No Image !" src={'data:image/jpeg;base64,' + this.returnImage(index)}></img>
                        </div>
                        <div class="col-lg-8">
                            <div><a onClick={this.redirectToBookProperty.bind(this, (item.key))} class="itemDescription">{item.headline}</a></div>
                            <div class="col-lg-12 alignLeft">
                                <div class="col-lg-2">
                                    <i class="fa fa-home">&nbsp;{item.type}</i>
                                </div>
                                <div class="col-lg-2"><i class="fa fa-bed">&nbsp;{item.bedrooms}&nbsp;BR</i></div>
                                <div class="col-lg-2"><i class="fa fa-bath">&nbsp;{item.bathrooms}&nbsp;BA</i></div>
                                <div class="col-lg-2"><i class="fa fa-users">&nbsp;Sleeps:&nbsp;{item.accomodates}</i></div>
                                <div class="col-lg-4"><i class="fa fa-window-maximize">&nbsp;{this.getFloorSize(400, 1000)}&nbsp;Sq.ft.</i></div>
                            </div>
                            <div><div class="">&nbsp;</div></div>
                            <div><div class="">{this.getFloorSize(20, 100) / 10} miles to {this.props.location.state.searchCity}</div></div>
                            <div><div class="">{item.rent} {'$avg/night'}</div></div>
                        </div>
                    </div>

                );
            })
        } else {
            PropItems = "NO DATA";
        }

        //check state after getting all comp structures
        console.log("final state after images download", this.state);

        return (
            <div class="displayProperty">
                <div class="container-fluid">
                    <div class="col-lg-12">
                        <div class="col-lg-7">
                            {PropItems}
                        </div>
                        <div class="col-lg-5">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DisplayProperty;
//console.log("item index",i,item);
            //console.log("data in render :", item.photos);
            //var images = item.photos.split("___");
            //console.log("image 0", images[1]);
            //var imagePreview = [];
            //imagePreview.push('data:image/jpg;base64, ' + images[1]);
            //  item.photos.map(element => {
            //     imagePreview.push('data:image/jpg;base64, ' + element);
            // })
            //console.log(imagePreview.length);



        // request for images
        // axios.post('http://localhost:3001/displayProperty/', data)
        //   .then(response => {
        //     console.log("Imgae Res length : ", response.data.length);
        //     var imagePreview=[];
        //     response.data.forEach(element=>{
        //       imagePreview.push('data:image/jpg;base64, ' + element);
        //     })
        //     this.setState({
        //       imageView: imagePreview
        //     })
        //     // console.log("STATE IMAGES : ",this.state.imageView, imagePreview);
        //   });
