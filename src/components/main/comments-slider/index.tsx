import React from 'react';
// @ts-ignore
import Slider from 'react-slick';

import css from './comments-slider.module.scss';

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const CommentsSlider: React.FC = () => {
  return (
    <div className={css.box}>
      <h4>See what our clients think</h4>

      <Slider {...settings} className={css.slickSlider}>
        <div>
          <div className={css.slider}>
            <div className={css.imgGroup}>
              <img src="/static/img/avatar2.png" alt="avatar" />
              <p>Eleanor Pena</p>
            </div>

            <p>
              <img src="/static/img/svg/quote.svg" alt="quote" />
              Thank you very much for the chance to speak with Johnny! He was just adorable! I am overwhelmed with
              emotions! Thanks to my magnificent husbent Don, who surprised me with such an amazing gift! I have never
              been happier!!!
            </p>
          </div>
        </div>
        <div>
          <div className={css.slider}>
            <div className={css.imgGroup}>
              <img src="/static/img/avatar2.png" alt="avatar" />
              <p>Eleanor Pena</p>
            </div>

            <p>
              <img src="/static/img/svg/quote.svg" alt="quote" />
              Thank you very much for the chance to speak with Johnny! He was just adorable! I am overwhelmed with
              emotions! Thanks to my magnificent husbent Don, who surprised me with such an amazing gift! I have never
              been happier!!!
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
