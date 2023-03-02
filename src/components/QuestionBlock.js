import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// import "swiper/css/pagination";

//perhaps split each panel into a separate component?



//once all are complete, slider is replaced with a modal - 'ready for results?' / cancel - undos last array entery or shows modal 

//modal also has a reset button
class QuestionBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButtonA: null,
      activeButtonB: null,
      activeButtonC: null,
      currentPage : 1,
      questionnaireAnswers :  [{ id: 1, answer: '' }, { id: 2, answer: '' }, { id: 3, answer: '' }],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  checkResults(pageNumber, selection) {
    //opens array and places answer in correct position
    const answers = this.state.questionnaireAnswers.map(answer => {
      if (pageNumber === answer.id) {
        answer.answer = selection ;
      }
      return answer;
    });
  
    this.setState({questionnaireAnswers: answers});
    console.log(this.state.questionnaireAnswers);

    //check if all answers are filled    
    var allFilled = 0;
    this.state.questionnaireAnswers.forEach(element => {
      if(element.answer !== '') {
        allFilled ++;
      }
      if(allFilled === this.state.questionnaireAnswers.length ) {
        console.log('OPEN MODAL');
      }
    });
    
  }

  handleClick(buttonId, questionNumber) {
    if(questionNumber === 1) {
      this.setState({ activeButtonA: buttonId });
    }
    if(questionNumber === 2) {
      this.setState({ activeButtonB: buttonId });
    }
    if(questionNumber === 3) {
      this.setState({ activeButtonC: buttonId });
    }
    this.checkResults(this.state.currentPage, buttonId);
  }
  
  render() {
    return (
      <div className="question-block">
        <p className="question-block__pagination">{this.state.currentPage} of 3</p>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          speed={300}
          navigation={
            true
          }
          allowTouchMove ={false} 

          modules={[EffectFade, Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => 
            this.setState({currentPage : swiper.activeIndex + 1})
            }
        >
          <SwiperSlide>
            <div className="slide-wrapper">
              <div className="question-block__question-container">
                <h1>Which sounds most like you?</h1>
              </div>
              <div className="question-block__rectangle-button-container">
                <div className={this.state.activeButtonA === 1 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(1,1)}>
                  <p>Resilient</p>
                </div>
                <div className={this.state.activeButtonA === 2 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(2,1)}>
                  <p>Great with people</p>
                </div>
                <div className={this.state.activeButtonA === 3 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(3,1)}>
                  <p>Friendly</p>
                </div>
                <div className={this.state.activeButtonA === 4 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(4,1)}>
                  <p>Logical thinker</p>
                </div>
                <div className={this.state.activeButtonA === 5 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(5,1)}>
                  <p>Eye for numbers</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="slide-wrapper">
              <div className="question-block__question-container">
                <h1>What surroundings bring the best out in you?</h1>
              </div>
              <div className="question-block__rectangle-button-container">
                <div className={this.state.activeButtonB === 1 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(1,2)}>
                  <p>Never the same</p>
                </div>
                <div className={this.state.activeButtonB === 2 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(2,2)}>
                  <p>A bustling office</p>
                </div>
                <div className={this.state.activeButtonB === 3 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(3,2)}>
                  <p>A varied routine</p>
                </div>
                <div className={this.state.activeButtonB === 4 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(4,2)}>
                  <p>Somewhere quiet</p>
                </div>
                <div className={this.state.activeButtonB === 5 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(5,2)}>
                  <p>Technological hardware</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="slide-wrapper">
              <div className="question-block__question-container">
                <h1>You feel rewarded by</h1>
              </div>
              <div className="question-block__rectangle-button-container">
                <div className={this.state.activeButtonC === 1 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(1,3)}>
                  <p>Representing values</p>
                </div>
                <div className={this.state.activeButtonC === 2 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(2,3)}>
                  <p>Nurturing</p>
                </div>
                <div className={this.state.activeButtonC === 3 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(3,3)}>
                  <p>Client satisfaction</p>
                </div>
                <div className={this.state.activeButtonC === 4 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(4,3)}>
                  <p>Strategising</p>
                </div>
                <div className={this.state.activeButtonC === 5 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(5,3)}>
                  <p>Technical solutions</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export { QuestionBlock };
