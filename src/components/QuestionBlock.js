import React from "react";

//perhaps split each panel into a separate component
class QuestionBlock extends React.Component {
  render() {
    return (
      <div className="question-block">
        <div className="slide-wrapper">
          <div className="question-block__question-container">
            <h1>Which sounds most like you?</h1>
          </div>
          <div className="question-block__rectangle-button-container">
            <div className="question-block__rectangle-button">
              <p>Resilient</p>
            </div>
            <div className="question-block__rectangle-button">
              <p>Great with people</p>
            </div>
            <div className="question-block__rectangle-button">
              <p>Friendly</p>
            </div>
            <div className="question-block__rectangle-button">
              <p>Logical thinker</p>
            </div>
            <div className="question-block__rectangle-button">
              <p>Eye for numbers</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { QuestionBlock };
