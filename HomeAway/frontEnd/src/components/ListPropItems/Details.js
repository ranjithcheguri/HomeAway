import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';


class Details extends Component {
    constructor(props) {
        super(props);
        console.log("Inside ListProperty/Details");

        this.state = ({
            headline: "",
            description: "",
            type: "",
            bedrooms: "",
            accomodates: "",
            bathrooms: "",
            redirectVar: false
        })
        this.sendDatatoParent = this.sendDatatoParent.bind(this);
    }

    getData = (e) => {
        e.preventDefault();
        //console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendDatatoParent = (e) => {
        e.preventDefault();
        console.log("inside onCLick Next method");
        console.log(this.state);
        this.props.callbackFromParent(this.state);
       
    }

    render() {
            return (

                <div class="container-fluid">
                    <div class="locationHeader">
                        <h4>Describe your property</h4>
                    </div>
                    <div class="detailsBody">
                        <form class="form-group">
                            <p class="form_element">Start out with a descriptive headline and a detailed summary of your property.</p>
                            <input class="form-control form_element" onChange={this.getData.bind(this)} name="headline" type="text" placeholder="HeadLine"></input>
                            <textarea class="form-control form_element" onChange={this.getData.bind(this)} name="description" type="text" placeholder="Property Description"></textarea>
                            <select name="type" onChange={this.getData.bind(this)} class="form-control">
                                <option>Select Property Type</option>
                                <option>House</option>
                                <option>Hotel</option>
                                <option>FarmHouse</option>
                                <option>Villa</option>
                                <option>Castle</option>
                                <option>Resort</option>
                                <option>Tower</option>
                            </select>
                            <input class="form-control form_element" onChange={this.getData.bind(this)} name="bedrooms" type="Number" min="1" placeholder="Bedrooms"></input>
                            <input class="form-control form_element" onChange={this.getData.bind(this)} name="accomodates" type="Number" min="1" placeholder="Accomodates"></input>
                            <input class="form-control form_element" onChange={this.getData.bind(this)} name="bathrooms" type="Number" min="1" placeholder="Bathrooms"></input>
                            <div>
                                <button class="col-lg-offset-2 col-lg-2 btn btn-danger">Cancel</button>
                                <button onClick={this.sendDatatoParent} class="col-lg-2  col-lg-offset-4 btn btn-primary">Next</button>
                            </div>
                        </form>
                    </div>
                </div>);
        }
    
}

export default Details;