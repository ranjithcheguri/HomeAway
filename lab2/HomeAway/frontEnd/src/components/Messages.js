import React, { Component } from 'react';
import cookie from 'react-cookies';
import '../css/Messages.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

/* REDUX IMPORTS BEGIN */
import { connect } from 'react-redux';
import { submitMessage } from '../actions/messageActions';
import { stat } from 'fs';
/* REDUX IMPORTS END */

class Messages extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.state);
        this.state = {
            message: "please login"
        }
        if (cookie.load('TravelerCookie')) {
            this.state = {
                from: cookie.load('TravelerCookie'),
                to: this.props.location.state,
            }
        } else if (cookie.load('OwnerCookie')) {
            this.state = {
                from: cookie.load('OwnerCookie'),
                to: this.props.location.state,
            }
        }
        console.log(this.state);

    }

    sendMessage = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.submitMessage(this.state);
    }

    componentDidMount() {
        if (this.state.message) {
            this.props.submitMessage(this.state);
        }
    }

    submitChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        if (this.props.message[0]) {
            var messagesFromKafka = this.props.message.map(item => {
                console.log("checking from and to details :");
                console.log("from : in state :", this.state.from);
                console.log("from : from kafka : ", item['from']);
                console.log("to : in state : ", this.state.to);
                console.log("to : from kafka : ", item['to']);
                if (this.state.from === item['to']) {
                    return (
                        <div class="container col-lg-12">
                            <div class="">
                                <div class="col-lg-3"><p>{JSON.stringify(item['to'])}</p></div>
                                <div class="col-lg-9"><p>{JSON.stringify(item['message'])}</p></div>
                            </div>
                        </div>
                    )
                }
            })
        } else {
            var messagesFromKafka = (
                <div class="messageBody">
                    <p>Name99</p>
                    <p>Message</p>
                </div>
            )
        }


        if (cookie.load('TravelerCookie') || cookie.load('OwnerCookie')) {
            return (
                <div class="messagePage container-fluid">
                    <div className="container messageContainer">
                        <form>
                            <div className="messageHeader">
                                <center> <h2>Messages</h2></center>
                            </div>
                            <div className="messageBody">
                                {messagesFromKafka}
                            </div>
                            <div className="sendMessage">
                                <div className="col-lg-12 input-group">
                                    <div class="col-lg-9">
                                        <input type="text" class="form-control" onChange={this.submitChange} name="message" placeholder="enter message"></input>
                                    </div>
                                    <div class="col-lg-3">
                                        <button type="submit" onClick={this.sendMessage} class="btn btn-primary">Send</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <p>Please login to continue...</p><Link to='/Login'>click here</Link>
                </div>
            )
        }
    }
}


//subscribe to Redux store updates.
const mapStateToProps = (state) => ({
    // variables below are subscribed to changes in loginState variables (redirectVar,Response) and can be used with props.
    message: state.messagesState.message
})

export default connect(mapStateToProps, { submitMessage })(Messages);