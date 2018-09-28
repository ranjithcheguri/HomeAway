import React, {Component} from 'react';

class BookingHistory extends Component{

    constructor(props){
        super(props);
        console.log("Inside Booking History");
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>
                            Property Title
                        </th>
                        
                        <th>
                            Header
                        </th>
                        
                        <th>
                            Start Date
                        </th>
                        
                        <th>
                            Price
                        </th>
                    </tr>
                    <td>
                        ldnv;  
                    </td>
                    <td>
                        skjfn;
                    </td>
                    <td>
                        sjkn;v .;
                    </td>
                    <td>
                        sjkdfnvl;
                    </td>
                </table>
            </div>
        );
    }
}

export default BookingHistory;