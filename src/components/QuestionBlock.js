import React from "react";

class QuestionBlock extends React.Component {
    render() {
      return(<div className="question-block">
        <div className="question-block__question-container">
          <h1>Which sounds most like you?</h1>
        </div>
      <div className="question-block__rectangle-button-container">
        <div className="question-block__rectangle-button">
          <p>Resilient</p>
        </div>
        <div className="question-block__rectangle-button">
          <p>Resilient</p>
        </div>
        <div className="question-block__rectangle-button">
          <p>Resilient</p>
        </div>
        <div className="question-block__rectangle-button">
          <p>Resilient</p>
        </div>
        <div className="question-block__rectangle-button">
          <p>Resilient</p>
        </div>
      </div>
    </div>);
       
    }
  }

  export {QuestionBlock};
