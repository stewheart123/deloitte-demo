import React from "react";
import Slider from "react-input-slider";

class SlideInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sliderValue: 50,
        };
    }

    sliderInputUpdate = (value, question) => {
        var ans;
        if (value >= 0 || value === 20) {
          ans = 1;
        }
        if (value === 30 || value === 40) {
          ans = 2;
        }
        if (value === 50 || value === 60) {
          ans = 3;
        }
        if (value === 70 || value === 80) {
          ans = 4;
        }
        if (value >= 90) {
          ans = 5;
        }

        this.setState({ sliderValue: value });

       this.props.onAnswer(ans, question);
      };

  handleClick(questionNo, buttonId, answer) {
    //pass question number and answer to parent
    this.props.onAnswer(answer, questionNo);

    //set class for selected button
    if (buttonId === "A") {
      this.setState({ activeButton: buttonId });
    }
    if (buttonId === "B") {
      this.setState({ activeButton: buttonId });
    }
    if (buttonId === "C") {
      this.setState({ activeButton: buttonId });
    }
    if (buttonId === "D") {
      this.setState({ activeButton: buttonId });
    }
    if (buttonId === "E") {
      this.setState({ activeButton: buttonId });
    }
  }

  render() {
    return (
        <div className="slide-wrapper --slider-slide">
        <h1>
          {this.props.question}
        </h1>
        <div className="slide-input">
          <Slider
            axis="x"
            xstep={10}
            x={this.state.sliderValue}
            onChange={({ x }) => this.sliderInputUpdate(x,  this.props.qNo)}
            styles={{
              track: {
                backgroundColor: "#c1fb4d",
                width: 80 + "%",
                margin: "auto",
                display: "block",
                height: 3,
              },
              active: {
                backgroundColor: "#c1fb4d",
              },
              thumb: {
                backgroundColor: "#c1fb4d",
                width: 30,
                height: 30,
                borderRadius: 30,
              },
              disabled: {
                opacity: 0.5,
              },
            }}
          />
        </div>
        <p className="slider-percentage">{this.state.sliderValue} %</p>
      </div>
    );
  }
}
export default SlideInput;
