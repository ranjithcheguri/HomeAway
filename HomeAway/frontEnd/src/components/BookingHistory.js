import React, {Component} from 'react';

class BookingHistory extends Component{

    constructor(props){
        super(props);
        console.log("Inside Booking History");
    }

   
    render() {
        var photos=[]
        console.log(this.state.photosData[this.state.key].length);
        photos.push(
            <div class="item active container-img">
            here2352
        </div>
        )
        for(var i=1;i<4;i++){
            photos.push(
                <div class="item container-img">
                here
            </div>
            )
        }
        console.log(photos);

        return (
            <div>
                <div class="container col-lg-8">
                    <div id="myCarousel" class="carousel slide " data-ride="carousel">
                        <div class="carousel-inner">
                            {photos}
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
            </div>
        )
    }
}
export default BookingHistory;