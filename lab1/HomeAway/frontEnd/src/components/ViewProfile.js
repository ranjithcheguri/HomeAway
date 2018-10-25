import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer2 from './Footer2';

class ViewProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: "",
            email: ""
        }
    }

    async componentDidMount() {
        var data = "";
        console.log(sessionStorage.getItem('username'));
        if (sessionStorage.getItem('username')) {
            console.log("1")
            data = {
                email: sessionStorage.getItem('username')
            }
        } else {
            console.log("2")
            data = {
                email: sessionStorage.getItem('ownername')
            }
        }

        console.log("data", data);
        axios.post('http://localhost:3001/ViewProfile/', data)
            .then((response) => {
                console.log(response);
                this.setState({
                    response: response.data
                })
            })
    }


    render() {
        const result = "";
        var len = "";
        //console.log(this.state.response.length);
        if (this.state.response) {
            len = this.state.response.length;
            return (
                <div class="">
                    <div class="container viewProfileContainer">
                        <div class="col-lg-4">
                            <div class="floatRight">
                                <img class="profileIcon" src='https://csvcus.homeaway.com/rsrcs/cdn-logos/2.10.3/bce/brand/misc/default-profile-pic.png'></img>
                            </div>
                            <div class="floatCenter">
                                <i class="fa fa-star" /><i class="fa fa-star" /><i class="fa fa-star" /><i class="fa fa-star" /><i class="fa fa-star" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <h2>Hi, I'm {this.state.response[len - 1].firstname}</h2>
                            <h4>member since 2018</h4>
                            <div class="paddingAbt">
                                <b>About Me</b>
                            </div>
                            <div class="paddingAb">
                                <p>Hometown : {this.state.response[len - 1].hometown}</p>
                                <p>Company : {this.state.response[len - 1].company}</p>
                                <p>School : {this.state.response[len - 1].school}</p>
                                <p>languages : {this.state.response[len - 1].languages}</p>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <Link to='/Profile'><span style={{ fontSize: 20 + "px" }}><i class="fa fa-edit"></i>edit profile</span></Link>
                        </div>
                    </div>
                    <div><Footer2 /></div>
                </div>
            )
        } else {
            return (
                <div>
                    "No Data"
            </div>
            )
        }

        return (
            <div>
                {/* container if written in below div is not working it is working only in above return statement */}
                {result}
            </div>
        )
    }
}

export default ViewProfile;