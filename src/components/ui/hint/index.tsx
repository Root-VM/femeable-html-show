import * as React from 'react';

import classNames from 'classnames';
import css from './hint.module.scss';

export interface HintProps {
  text: string;
  imgUrl: string;
  size?: 'small' | 'medium';
  color?: 'blue' | 'red' | 'yellow' | 'green';
}

export const Hint: React.FC<HintProps> = ({ text, imgUrl, size = 'medium', color = 'blue' }) => {
  return (
    <div className={classNames(css.box, css[size], css[color])}>
      <img src={imgUrl} alt="question" />
      <p>{text}</p>
    </div>
  );
};
