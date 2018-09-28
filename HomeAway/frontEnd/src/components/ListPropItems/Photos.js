import React,{Component} from 'react';
import axios from 'axios';
import Availability from './PricingItems/Availability';

class Photos extends Component{
constructor(props){
    super(props);
    console.log("Inside ListProperty/Photos");
    
    this.state={
        comp:<Availability callbackFromParent={this.myCallback}/>,
        photos: "af",
    }
}

getData=(e)=>{
    console.log("inside get Photos")
    e.preventDefault();
        console.log("OnChnage", e.target.files);
        this.setState({
        [e.target.name]: e.target.files
        })
      console.log("In state",this.state);
}

sendDatatoParent=(e)=>{
    e.preventDefault();
    console.log(this.state);
    this.props.callbackFromParent(this.state);

    const { photos } = this.state;

    let formData = new FormData();
    let imageCount = this.state.photos.length;
    for (let i = 0; i < imageCount; i++) {
      formData.append('photos', photos[i]);
    }
    console.log(formData);
    axios.defaults.withCredentials = true;
    axios.post('http://localhost:3001/listPropertyPhotos', formData)
      .then((response) => {
        // access results...
        console.log(response);
      });
}

render(){
    return(
<div class="photosUpload container-fluid">
            <div class="locationHeader">
                <h4>Add up to 5 photos of your property</h4>
            </div>
            <div class="PhotosBody">
                <form class="form-group">
                    <div class="form_element">
                        <p>Showcase your property’s best features (no pets or people, please). Requirements: JPEG, at least 1920 x 1080 pixels, less than 20MB file size, 2 photos minimum. Need photos? Hire a professional.</p>
                    </div>
                    <div class="selectPhotos form_element">
                        <center>
                        <div>
                            <p>Drop photos here</p>
                        </div>
                        <div>
                            <p>or</p>
                        </div>
                        <div>
                            <input class="btn-primary form_element" name="photos" type="file" onChange={this.getData.bind(this)} multiple ></input>
                        </div>
                        <div>
                            <span>0 of 5 uploaded. 2 are required. You can choose to upload more than one photo at a time.</span>
                        </div>
                        </center>
                    </div>
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

export default Photos;