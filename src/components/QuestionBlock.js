import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";
import Slider from "react-input-slider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import ButtonSelect from "./ButtonSelect";

class QuestionBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButtonA: null,
      activeButtonB: null,
      activeButtonC: null,
      currentPage: 1,
      sliderValue: 50,
      questionnaireAnswers: [
        { id: 1, answer: "" },
        { id: 2, answer: "" },
        { id: 3, answer: "" },
      ],
      modalClass: "modal --hidden",
      careerResult: "Ready for your ideal career path?",
    };
    //  this.handleClick = this.handleClick.bind(this);
    this.sliderInputUpdate = this.sliderInputUpdate.bind(this);
  }

  checkResults(pageNumber, selection) {
    //opens array and places answer in correct position
    const answers = this.state.questionnaireAnswers.map((answer) => {
      if (pageNumber === answer.id) {
        answer.answer = selection;
      }
      return answer;
    });

    this.setState({ questionnaireAnswers: answers });
    //check if all answers are filled
    var allFilled = 0;
    this.state.questionnaireAnswers.forEach((element) => {
      if (element.answer !== "") {
        allFilled++;
      }
      if (allFilled === this.state.questionnaireAnswers.length) {
        this.setState({ modalClass: "modal --display" });
      }
    });
  }

  resetResults() {
    window.location.reload();
  }

  showResults() {
    var result =
      (this.state.questionnaireAnswers[0].answer +
        this.state.questionnaireAnswers[1].answer +
        this.state.questionnaireAnswers[2].answer) /
      3;

    if (result < 6) {
      this.setState({ careerResult: "Analyst" });
    }
    if (result < 5) {
      this.setState({ careerResult: "Systems Architect" });
    }
    if (result < 4) {
      this.setState({ careerResult: "Client Success" });
    }
    if (result < 3) {
      this.setState({ careerResult: "Human Resources" });
    }
    if (result < 2) {
      this.setState({ careerResult: "Representitive" });
    }
  }

  handleClick = (buttonId, questionNumber) => {
    if (questionNumber === 1) {
      this.setState({ activeButtonA: buttonId });
    }
    if (questionNumber === 2) {
      this.setState({ activeButtonB: buttonId });
    }
    if (questionNumber === 3) {
      this.setState({ activeButtonC: buttonId });
    }
    this.checkResults(this.state.currentPage, buttonId);
    console.log(this.state.questionnaireAnswers);
  };

  getAnswer = (question, ans) => {
    console.log(question, ans);

    this.handleClick(question, ans);
  };

  sliderInputUpdate(value) {
    // if (value.cancelable) {
    //   value.preventDefault();
    // }
    this.setState({ sliderValue: value });
  }

  handleTouchMove(event) {
    event.preventDefault();
    if (event.cancelable) {
    }
  }

  render() {
    return (
      <div className="question-block">
        <p className="question-block__pagination">
          {this.state.currentPage} of {this.props.questions}
        </p>

        <Swiper
          spaceBetween={30}
          effect={"fade"}
          speed={400}
          navigation={true}
          allowTouchMove={false}
          modules={[EffectFade, Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) =>
            this.setState({ currentPage: swiper.activeIndex + 1 })
          }
        >
          <SwiperSlide>
            <ButtonSelect
              qNo="1"
              question="Which sounds most like you?"
              answers={[
                "Resilient",
                "Great with people",
                "Friendly",
                "Logical thinker",
                "Eye for numbers",
              ]}
              onAnswer={this.getAnswer}
            />
            </SwiperSlide>
            <SwiperSlide>
            <ButtonSelect
              qNo="2"
              question="What surroundings bring the best out in&nbsp;you?"
              answers={[
                "Never the same",
                "A bustling office",
                "A varied routine",
                "Somewhere quiet",
                "Somewhere quiet",
              ]}
              onAnswer={this.getAnswer}
            />
            </SwiperSlide>
            <SwiperSlide>
            <ButtonSelect
              qNo="3"
              question="You feel rewarded by ..."
              answers={[
                "Representing values",
                "Nurturing",
                "Client satisfaction",
                "Strategising",
                "Technical solutions",
              ]}
              onAnswer={this.getAnswer}
            />
            </SwiperSlide>
    
          <SwiperSlide>
            <div className="slide-wrapper --slider-slide">
              <h1>
                What percentage of your time would you prefer to work from home?
              </h1>
              <div className="slide-input">
                <Slider
                  axis="x"
                  xstep={10}
                  x={this.state.sliderValue}
                  onChange={({ x }) => this.sliderInputUpdate(x)}
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
          </SwiperSlide>
        </Swiper>
        {/* career result modal */}
        <div className={this.state.modalClass}>
          <div className="question-block__question-container">
            <h1>{this.state.careerResult}</h1>
          </div>
          <div className="question-block__rectangle-button-container">
            <div
              className="rectangle-button --decider"
              onClick={() => this.showResults()}
            >
              <p>Show me</p>
            </div>
            <div
              className="rectangle-button --decider"
              onClick={() => this.resetResults()}
            >
              <p>Reset</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { QuestionBlock };
