import React, { Component } from 'react';
import axios from 'axios';


class DisplayProperty extends Component {
    constructor(props) {
        super(props);
        console.log("Inside Display Properties");
        //retrieving data from pushed history.
        console.log("search properties from landingPage", this.props.location.state);

        this.state = {
            photosData: [],
            propertyData: []
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


    render() {
        var PropItems="";
        console.log("data in renderer start",this.state.photosData);
        if (!!this.state.photosData) {
            PropItems = this.state.propertyData.map((item, index) => {
                //console.log(item,index);
                //var Temp_photos = [];
                //console.log("photosdata:" + this.state.photosData);
                //Temp_photos = this.state.photosData[1];
                //console.log("temp_photos : ", Temp_photos.get(1));
                return (
                    <div class="displayItem marginAll marginRight">
                        <tr>
                            <td rowSpan="7"><img class="displayPropertyImage" alt="image comes here" src={'data:image/jpeg;base64,' + this.state.photosData[index]}></img></td>
                            <td><b><a class="itemDescription" href="">{item.description}</a></b></td>
                        </tr>
                        <tr>
                            <td>"kjabf;"</td>
                        </tr>
                        <tr>
                            <td>"kjabf;"</td>
                        </tr>
                        <tr>
                            <td>"kjabf;"</td>
                        </tr>
                        <tr>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>7</td>
                        </tr>
                    </div>

                );
            })
        }else{
            PropItems="NO DATA";
        }

        //check state after getting all comp structures
        console.log("final state after images download", this.state);

        return (
            <div class="displayProperty">
                <div class="container-fluid">
                    <table class="displayTable table table-dark">
                        <tbody>
                            {PropItems}
                        </tbody>
                    </table>
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
