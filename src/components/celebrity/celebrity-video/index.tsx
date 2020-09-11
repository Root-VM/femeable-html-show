import React from 'react';

import css from './celebrity-video.module.scss';

export const CelebrityVideo: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.photo}>
        <img src="/static/img/people/Matthew3.png" alt="Matthew" />
        <img className={css.play} src="/static/img/svg/play-white.svg" alt="play" />
      </div>

      <div className={css.icons}>
        <div>
          <div className={css.icon}>
            <img src="/static/img/svg/pointer.svg" alt="icon" />
          </div>
          <p>Choose celebrity and fill in the form</p>
        </div>
        <div>
          <div className={css.icon}>
            <img src="/static/img/svg/time.svg" alt="icon" />{' '}
          </div>
          <p>Choose celebrity and fill in the form</p>
        </div>
        <div>
          <div className={css.icon}>
            <img src="/static/img/svg/nexus.svg" alt="icon" />{' '}
          </div>
          <p>Choose celebrity and fill in the form</p>
        </div>
      </div>

      <div className={css.line}>
        <hr /> <hr />
      </div>

      <div className={css.iconGroup}>
        <div className={css.icon}>
          <img src="/static/img/svg/star.svg" alt="icon" />{' '}
        </div>
        <p>Choose celebrity and fill in the form</p>
      </div>
    </div>
  );
};
