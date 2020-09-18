import React from 'react';
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
  const customSlider: any = React.createRef();

  const gotoNext = () => {
    customSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customSlider.current.slickPrev();
  };

  return (
    <div className={css.box}>
      <h4>See what our clients think</h4>

      <Slider {...settings} ref={customSlider} className={css.slickSlider}>
        {/* list */}
        <div>
          <div className={css.slider}>
            <div
              aria-label="p"
              className={css.prevMethod}
              onClick={() => gotoPrev()}
              onKeyDown={() => false}
              role="button"
              tabIndex={0}
            />
            <div
              aria-label="p"
              className={css.nextMethod}
              onClick={() => gotoNext()}
              onKeyDown={() => false}
              role="button"
              tabIndex={0}
            />

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
            <div
              aria-label="p"
              className={css.prevMethod}
              onClick={() => gotoPrev()}
              onKeyDown={() => false}
              role="button"
              tabIndex={0}
            />
            <div
              aria-label="p"
              className={css.nextMethod}
              onClick={() => gotoNext()}
              onKeyDown={() => false}
              role="button"
              tabIndex={0}
            />
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
