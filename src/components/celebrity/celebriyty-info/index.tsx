import React from 'react';

import css from './celebriyty-info.module.scss';
import { Button } from '../../ui/button';
import { Rating } from '../../ui/rating';

export const CelebrityInfo: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.element}>
        <div className={css.photo}>
          <img src="/static/img/people/Matthew2.png" alt="Matthew" />
        </div>

        <h3>Matthew Mcconaughey</h3>

        <div className={css.small}>
          <p>Cinema, actor</p>
          <p>Interstellar, Gold, The Gentleman</p>
          <hr />
        </div>
      </div>

      <p className={css.price}>50$</p>

      <p className={css.text}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
        velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>

      <div className={css.group}>
        <Button tagType="orange">Book</Button>

        <div>
          <div className={css.rating}>
            <Rating count={5} activeVal={3} />
            <span>4,9</span>
          </div>

          <p className={css.last}>See comments</p>
        </div>
      </div>
    </div>
  );
};
