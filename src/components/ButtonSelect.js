import React from "react";

class ButtonSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: null,
    };
  }

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
      <div className="slide-wrapper">
        <div className="question-block__question-container">
          <h1>{this.props.question}</h1>
        </div>
        <div className="question-block__rectangle-button-container">
          <div
            className={
              this.state.activeButton === "A"
                ? "rectangle-button --active"
                : "rectangle-button "
            }
            onClick={() => this.handleClick(this.props.qNo, "A", 1)}
          >
            <p>{this.props.answers[0]}</p>
          </div>
          <div
            className={
              this.state.activeButton === "B"
                ? "rectangle-button --active"
                : "rectangle-button "
            }
            onClick={() => this.handleClick(this.props.qNo, "B", 2)}
          >
            <p>{this.props.answers[1]}</p>
          </div>
          <div
            className={
              this.state.activeButton === "C"
                ? "rectangle-button --active"
                : "rectangle-button "
            }
            onClick={() => this.handleClick(this.props.qNo, "C", 3)}
          >
            <p>{this.props.answers[2]}</p>
          </div>
          <div
            className={
              this.state.activeButton === "D"
                ? "rectangle-button --active"
                : "rectangle-button "
            }
            onClick={() => this.handleClick(this.props.qNo, "D", 4)}
          >
            <p>{this.props.answers[3]}</p>
          </div>
          <div
            className={
              this.state.activeButton === "E"
                ? "rectangle-button --active"
                : "rectangle-button "
            }
            onClick={() => this.handleClick(this.props.qNo, "E", 5)}
          >
            <p>{this.props.answers[4]}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ButtonSelect;
