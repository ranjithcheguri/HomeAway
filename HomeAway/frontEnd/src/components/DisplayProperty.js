import React, {Component} from 'react';

class DisplayProperty extends Component{
    constructor(props){
        super(props);
        console.log("Inside Display Properties");
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

export default DisplayProperty;
