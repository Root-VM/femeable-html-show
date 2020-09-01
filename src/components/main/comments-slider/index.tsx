import React from 'react';

import css from './comments-slider.module.scss';

export const CommentsSlider: React.FC = () => {
  return (
    <div className={css.box}>
      <h4>See what our clients think</h4>

      <div className={css.slider}>
        <div className={css.imgGroup}>
          <img src="/static/img/avatar2.png" alt="avatar" />
          <p>Eleanor Pena</p>
        </div>

        <p>
          <img src="/static/img/svg/quote.svg" alt="quote" />
          Thank you very much for the chance to speak with Johnny! He was just adorable! I am overwhelmed with emotions!
          Thanks to my magnificent husbent Don, who surprised me with such an amazing gift! I have never been happier!!!
        </p>

        <div className={css.navigation}>
          <span className={css.active} />
          <span />
          <span />
          <span />
        </div>

        <div className={css.controls}>
          <span className={css.next}>
            <img src="/static/img/svg/right.svg" alt="next" />
          </span>
        </div>
      </div>
    </div>
  );
};
