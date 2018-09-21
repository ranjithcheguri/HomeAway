import React,{Component} from 'react';

class Details extends Component{
constructor(props){
    super(props);
    console.log("Inside ListProperty/Details");
}

render(){
    return(
        <div class="container-fluid">
            <div class="locationHeader">
                <h4>Describe your property</h4>
            </div>
            <div class="detailsBody">
                <form class="form-group">
                    <p class="form_element">Start out with a descriptive headline and a detailed summary of your property.</p>
                    <input class="form-control form_element" type="text" placeholder="HeadLine"></input>
                    <textarea class="form-control form_element" type="text" placeholder="Property Description"></textarea>
                    <select class="form-control">
                        <option>Select Property Type</option>
                        <option>House</option>
                        <option>Hotel</option>
                        <option>FarmHouse</option>
                        <option>Villa</option>
                        <option>Castle</option>
                        <option>Resort</option>
                        <option>Tower</option>
                    </select>
                    <input class="form-control form_element" type="Number" min="1" placeholder="Bedrooms"></input>
                    <input class="form-control form_element" type="Number" min="1" placeholder="Accomodates"></input>
                    <input class="form-control form_element" type="Number" min="1" placeholder="Bathrooms"></input>  
                    <div>
                        <button class="col-lg-offset-2 col-lg-2 btn btn-danger">Cancel</button>
                        <button class="col-lg-2  col-lg-offset-4 btn btn-primary">Next</button>
                    </div>              
                </form>
            </div>
        </div>    );
}
}

export default Details;