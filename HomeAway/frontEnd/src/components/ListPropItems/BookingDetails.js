import React,{Component} from 'react';

class BookingDetails extends Component{
constructor(props){
    super(props);
    console.log("Inside ListProperty/BookingDetails");
}

render(){
    return(
<div class="bookingDetails container-fluid">
            <div class="locationHeader">
                <h4>Booking Options</h4>
            </div>
            <div class="">
                <h4>Select a booking method</h4>
            </div>
            {/* <div>
                <span>_ </span>
            </div> */}
            <div class="locationBody">
                <form class="form-group">
                    <div class='bookingMethod'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="optradio" checked ></input>
                            <label class="form-check-label">Instant Booking</label>
                            <span class="label_recom label label-warning">Recommended</span>
                        </div>
                        <div class="radioDesc">
                            <span>Automatically accept booking requests from all travelers for dates you have available, and add the bookings to your calendar.</span>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="optradio"></input>
                            <label class="form-check-label">24-hour review</label>
                        </div>
                        <div class="radioDesc">
                            <span>Allow 24 hours to communicate with guests and accept booking requests.</span>
                        </div>
                        <div class="form_element locationHeader">
                        </div>
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

export default BookingDetails;