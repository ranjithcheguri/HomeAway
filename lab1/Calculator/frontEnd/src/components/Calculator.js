import React, {Component} from 'react';
import axios from 'axios';

class Calculator extends Component{

    constructor(props){
        super(props);
        this.state={
            expression : "",
            answer:""
        }
    }


    handleExp=(e)=>{
        console.log("inside handle exp");

        this.setState({
            expression : this.state.expression + e.target.value
        })
       
        console.log(this.state.expression);
    }

    handleClear = (e)=>{
        this.setState({
            expression:""
        })
    }

     handleExpression = async(e)=>{
        console.log("expression submitted");
        const data = {
            "computeExpression" : this.state.expression
        }
        this.setState({
            expression : ""
        })
        console.log(data);
       await axios.post('http://localhost:3001/compute',data)
        .then(response=>{
            this.setState({
                expression : response.data
            });
            console.log("response received : ",response.data);
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
                        <input type="text" value={this.state.expression} id="text_box"/>
                        </div>
                        <div className="row">
                        <button onClick={this.handleClear} className="btns tall" id="ac">AC</button>
                        {/* <button onClick={this.handleClear2}className="btns" id="ce">CE</button> */}
                        <button onClick={this.handleExp} className="btns" value="%" id="per">%</button>
                        <button onClick={this.handleExp} className="btns" value="/" id="div">/</button>
                        </div>
                        <div className="row">
                        <button onClick={this.handleExp} className="btns" value="7" id="sev">7</button>
                        <button onClick={this.handleExp} className="btns" value="8" id="eig">8</button>
                        <button onClick={this.handleExp} className="btns" value="9" id="nin">9</button>
                        <button onClick={this.handleExp} className="btns" value="*" id="mul">*</button>
                        </div>
                        <div className="row">
                        <button onClick={this.handleExp} className="btns" value="4" id="4">4</button>
                        <button onClick={this.handleExp} className="btns" value="5" id="5">5</button>
                        <button onClick={this.handleExp} className="btns" value="6" id="6">6</button>
                        <button onClick={this.handleExp} className="btns" value="-" id="sub">-</button>
                        </div>

                        <div className="row">
                        <button onClick={this.handleExp} className="btns" value="1" id="one">1</button>
                        <button onClick={this.handleExp} className="btns" value="2" id="two">2</button>
                        <button onClick={this.handleExp} className="btns" value="3" id="thr">3</button>
                        <button onClick={this.handleExp} className="btns" value="+" id="add">+</button>
                        </div>
                        <div className="row">
                        <button onClick={this.handleExp} className="btns  tall" value="0" id="xer">0</button>
                        <button onClick={this.handleExp} className="btns" value="." id="dot">.</button>
                        <button onClick={this.handleExpression} className="btns" id="equ">=</button>
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