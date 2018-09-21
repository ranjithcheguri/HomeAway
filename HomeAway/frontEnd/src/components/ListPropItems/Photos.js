import React,{Component} from 'react';

class Photos extends Component{
constructor(props){
    super(props);
    console.log("Inside ListProperty/Photos");
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
                            <button class="btn btn-primary form_element" type="" onClick="">SELECT PHOTOS TO UPLOAD</button>
                        </div>
                        <div>
                            <span>0 of 5 uploaded. 2 are required. You can choose to upload more than one photo at a time.</span>
                        </div>
                        </center>
                    </div>
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

export default Photos;