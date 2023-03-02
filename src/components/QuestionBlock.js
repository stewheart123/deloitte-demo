import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

//perhaps split each panel into a separate component?

//add onclick event that changes the state plus updates an object / array with answers

//once all are complete, slider is replaced with a modal - 'ready for results?' / cancel - undos last array entery or shows modal 

//modal also has a reset button
class QuestionBlock extends React.Component {
  render() {
    return (
      <div className="question-block">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          speed={1000}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
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
