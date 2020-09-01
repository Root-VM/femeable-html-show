import React from 'react';

import css from './video-modal.module.scss';

export const VideoModal: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.element}>
        <img src="/static/img/people/Depp2.png" alt="Depp" />

        <div className={css.play}>
          <img src="/static/img/svg/play.svg" alt="play" />
        </div>
        <img className={css.close} src="/static/img/svg/close.svg" alt="close" />
      </div>
    </div>
  );
};
