
import React, {Component} from 'react';
import { Knob } from 'primereact/knob';
// import { Button } from 'primereact/button';

export default class RotaryKnob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            knobValue : 40,
            salary :  "40,000"
        }       
    }
    
    salary = (input) => {
        var salaryToComma = (input * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var numericAnswer = 1;
        this.setState({salary : salaryToComma });
        this.setState({knobValue : input});
        if(input  <= 35) {
            numericAnswer = 1;
        }
        if(input  >= 40 && input < 54 ) {
            numericAnswer = 2;
        }
        if(input  >= 55 && input < 66 ) {
            numericAnswer = 3;
        }
        if(input  >= 70 && input < 84 ) {
            numericAnswer = 4;
        }
        if(input  >= 85) {
            numericAnswer = 5;
        }
        this.props.onAnswer(numericAnswer, this.props.qNo);
        console.log(numericAnswer);
    }   

    render() {
        return (
            <div className="slide-wrapper --slider-slide --rotary-knob">
                <h1>{this.props.question}</h1>
            
          
                <p className="slider-percentage">£{this.state.salary}</p>
                <Knob value={this.state.knobValue} min={30} max={90} size={200} step={5} onChange={(e)=>this.salary(e.value)}/>         
            </div> 
      
            
        )
    }
}
                 