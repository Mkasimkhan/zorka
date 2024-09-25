import './Slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { sliderdata } from '../../Data/Data';

function AutoSlider() {
  const settings = {
    infinite: true, 
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="slider-main-container">
      <Slider {...settings}>
        {
          sliderdata.map((item, i) => {
            // Apply different classes based on the index (1, 4, 7, etc.)
            let bgClass = '';
            if ((i + 1) % 3 === 1) {
              bgClass = 'bg1';
            } else if ((i + 1) % 3 === 2) {
              bgClass = 'bg2';
            } else {
              bgClass = 'bg3';
            }

            return (
              <div key={i} className={`slider-container ${bgClass}`}>
                <div className='slider-image-container'>
                  <img src={item?.logo} alt='logo' className='slider-image' />
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default AutoSlider;
