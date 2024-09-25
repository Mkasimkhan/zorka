import './Slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { sliderdata } from '../../Data/Data';

function AutoSlider() {
  const settings = {
    // infinite: true,
    slidesToShow: 5, // Number of slides shown
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 0,
    // cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="slider-main-container">
      <Slider {...settings}>
        {
          sliderdata.map((item, i) => (
            <div key={i} className='slider-container'> {/* Each image in a separate slide */}
              <div className='slider-image-container'>
                <img src={item?.maskImg} alt='logo' className='slider-image-mask' />
                <img src={item?.logo} alt='logo' className='slider-image' />
              </div>
            </div>
          ))
        }
      </Slider>
    </div>

  );
}

export default AutoSlider;