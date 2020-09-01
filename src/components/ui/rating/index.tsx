import * as React from 'react';

import css from './rating.module.scss';

export interface HintProps {
  count: number;
  activeVal: number;
}

export const Rating: React.FC<HintProps> = ({ count, activeVal }) => {
  return (
    <ul className={css.box}>
      {[...Array(count)].map((val, i) => {
        return (
          <li className={activeVal >= count - i ? css.active : ''} key={i.toString() + val}>
            <img src="/static/img/svg/star-black.svg" alt="svg" />
          </li>
        );
      })}
    </ul>
  );
};
