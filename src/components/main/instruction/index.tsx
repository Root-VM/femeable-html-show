import React from 'react';

import css from './instruction.module.scss';

export const Instruction: React.FC = () => {
  return (
    <div className={css.box}>
      <h3>How to start?</h3>

      <ul>
        <li>
          <div className={css.img}>
            <img src="/static/img/svg/pointer.svg" alt="icon" />
          </div>
          <p>Choose a celebrity</p>
        </li>
        <li>
          <div className={css.img}>
            <img src="/static/img/svg/document.svg" alt="icon" />
          </div>
          <p>Fill in the form</p>
        </li>
        <li>
          <div className={css.img}>
            <img src="/static/img/svg/time.svg" alt="icon" />
          </div>
          <p>Wait for a special video</p>
        </li>
        <li>
          <div className={css.img}>
            <img src="/static/img/svg/nexus.svg" alt="icon" />
          </div>
          <p>Get the link to your video</p>
        </li>
        <li>
          <div className={css.img}>
            <img src="/static/img/svg/star.svg" alt="icon" />
          </div>
          <p>Enjoy!</p>
        </li>
      </ul>
      <img src="/static/img/avatar.png" alt="avatar" />
    </div>
  );
};
