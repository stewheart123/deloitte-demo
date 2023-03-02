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

//add onclick event that changes the state plus updates an object / array with answers

//once all are complete, slider is replaced with a modal - 'ready for results?' / cancel - undos last array entery or shows modal 

//modal also has a reset button
class QuestionBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: null,
      currentPage : 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonId) {
    this.setState({ activeButton: buttonId });
    //add other code to update the questionnaire state
  }
  
  render() {
    return (
      <div className="question-block">
        <p className="question-block__pagination">{this.state.currentPage} of 3</p>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          speed={1000}
          navigation={
            true
          }
          allowTouchMove ={false} 

          modules={[EffectFade, Navigation]}
          className="mySwiper"
         // onSwiper={(swiper) => console.log(swiper)}
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
                <div className={this.state.activeButton === 1 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(1)}>
                  <p>Resilient</p>
                </div>
                <div className={this.state.activeButton === 2 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(2)}>
                  <p>Great with people</p>
                </div>
                <div className={this.state.activeButton === 3 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(3)}>
                  <p>Friendly</p>
                </div>
                <div className={this.state.activeButton === 4 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(4)}>
                  <p>Logical thinker</p>
                </div>
                <div className={this.state.activeButton === 5 ? 'question-block__rectangle-button --active' : 'question-block__rectangle-button'} onClick={() => this.handleClick(5)}>
                  <p>Eye for numbers</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          
            <div className="slide-wrapper">
              <div className="question-block__question-container">
                <h1>Another Question?</h1>
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
          </SwiperSlide>
          <SwiperSlide>
         
            <div className="slide-wrapper">
              <div className="question-block__question-container">
                <h1>Question 2</h1>
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
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export { QuestionBlock };
