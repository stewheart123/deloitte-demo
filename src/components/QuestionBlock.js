import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import ButtonSelect from "./ButtonSelect";
import SlideInput from "./SlideInput";
import RotaryKnob from "./RotaryKnob";

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
        { id: 1, answer: 2 },
        { id: 2, answer: 3 },
        { id: 3, answer: "" },
        { id: 4, answer: "" },
        { id: 5, answer: "" },
      ],
      averageType : "mode", // mode or mean
      modalClass: "modal --hidden",
      careerResult: "Ready for your ideal career path?",
    };
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

  mode = (arr) => {
    const mode = {};
    let max = 0, count = 0;
  
    for(let i = 0; i < arr.length; i++) {
      const item = arr[i].answer;      
      if(mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }
      
      if(count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }
     
    return max;
  };

  showResults(averageType) {
    var total = 0;
    var average;

    if(averageType === "mode") {
      average = this.mode(this.state.questionnaireAnswers);
      console.log("modal average is...."  + average);
    }
    else {
      this.state.questionnaireAnswers.forEach((item)=> {
        console.log(item.answer);
        total += item.answer;
      });
      average = total / this.state.questionnaireAnswers.length;
      console.log("mean average is...."  + average);
    }
  
    if (average < 6) {
        this.setState({ careerResult: "Controls Manager" });
      }
      if (average < 5) {
        this.setState({ careerResult: "Analyst" });
      }
      if (average < 4) {
        this.setState({ careerResult: "Assistant Director" });
      }
      if (average < 3) {
        this.setState({ careerResult: "Client Project Manager" });
      }
      if (average < 2) {
        this.setState({ careerResult: "Consultant" });
      }
    
    
  }

  handleClick = (buttonId) => {
    this.checkResults(this.state.currentPage, buttonId);
    console.clear();
    console.log(this.state.questionnaireAnswers);
  };

  getAnswer = (question, ans) => {
   // console.log(question, ans);
    this.handleClick(question, ans);
  };

  render() {
    return (
      <div className="question-block">
        <div className="above">
          
        
        </div>
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
            <RotaryKnob question="What's your starting salary expectaion?" qNo={1} onAnswer={this.getAnswer}/>
          </SwiperSlide>
          
          <SwiperSlide >
            <SlideInput question="What percentage of your working week would you do remotely?" qNo={2} onAnswer={this.getAnswer}/>
          </SwiperSlide>

          <SwiperSlide>
            <ButtonSelect
              qNo="3"
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
              qNo="4"
              question="What surroundings bring the best out in&nbsp;you?"
              answers={[
                "Never the same",
                "A bustling office",
                "A varied routine",
                "Somewhere quiet",
                "Home Office",
              ]}
              onAnswer={this.getAnswer}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ButtonSelect
              qNo="5"
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
        </Swiper>
        {/* career result modal */}
        <div className={this.state.modalClass}>
          <div className="question-block__question-container">
            <h1>{this.state.careerResult}</h1>
          </div>
          <div className="question-block__rectangle-button-container">
            <div
              className="rectangle-button --decider"
              onClick={() => this.showResults(this.state.averageType)}
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
