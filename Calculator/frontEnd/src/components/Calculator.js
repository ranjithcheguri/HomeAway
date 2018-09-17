import React, {Component} from 'react';
import axios from 'axios';

class Calculator extends Component{

    constructor(props){
        super(props);
        this.state={
            expression : ""
        }
    }


    handleExpression = (e)=>{
        console.log("expression submitted");
        const data = {
            "id" : '2+3*5'
        }
        axios.post('http://localhost:3001/',data)
        .then(response=>{
            
        });
        e.preventDefault();
    }

        render(){
            return(                
                <div className="App">
                {/* <body className="bg"> */}
                <center>
                    <div className="calc">
                    <center>
                        <h1>Basic Calculator</h1>
                        <div className="row">
                        <input type="text" id="text_box"/>
                        </div>
                        <div className="row">
                        <button className="btns" id="ac">AC</button>
                        <button className="btns" id="ce">CE</button>
                        <button className="btns" id="per">%</button>
                        <button className="btns" id="div">/</button>
                        </div>
                        <div className="row">
                        <button className="btns" id="sev">7</button>
                        <button className="btns" id="eig">8</button>
                        <button className="btns" id="nin">9</button>
                        <button className="btns" id="mul">*</button>
                        </div>
                        <div className="row">
                        <button className="btns" id="4">4</button>
                        <button className="btns" id="5">5</button>
                        <button className="btns" id="6">6</button>
                        <button className="btns" id="sub">-</button>
                        </div>

                        <div className="row">
                        <button className="btns" id="one">1</button>
                        <button className="btns" id="two">2</button>
                        <button className="btns" id="thr">3</button>
                        <button className="btns" id="add">+</button>
                        </div>
                        <div className="row">
                        <button className="btns  tall" id="xer">0</button>
                        <button className="btns" id="dot">.</button>
                        <button className="btns" onClick={this.handleExpression} id="equ">=</button>
                        </div>
                    </center>
                    </div>
                </center>
                {/* </body> */}
                </div>
            
            );
        }
}

export default Calculator;