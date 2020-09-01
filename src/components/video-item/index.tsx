import React from 'react';

import css from './video-item.module.scss';

export const VideoItem: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.img}>
        <img src="/static/img/people/Depp.png" alt="people" />
      </div>

      <div className={css.line}>
        <p>Johnny Depp</p>
        <p>50$</p>
      </div>

      <p>Actor, Pirates of the Carribean Sea </p>
    </div>
  );
};
