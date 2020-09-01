import React, { useState } from 'react';

import classNames from 'classnames';
import css from './celebrity-dropdown.module.scss';
import { Hint } from '../../../ui/hint';
import { Checkbox } from '../../../ui/checkbox';

export const CelebrityDropdown: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={classNames(css.box, show ? css.show : '')}>
      <div className={css.line}>
        <div className={css.photo}>
          <div>
            <img src="/static/img/people/Depp.png" alt="Depp" />
          </div>
          <p>Johnny Depp</p>
        </div>
        <p className={css.time}> 16.07.2020 2:12 pm</p>

        <div className={css.hint}>
          <Hint size="small" color="yellow" text="Will be ready soon" imgUrl="/static/img/svg/play.svg" />
        </div>

        <p className={css.price}>100$</p>

        <p className={css.status}>Paid</p>

        <div className={css.close}>
          <Hint size="small" color="red" text="Cancel order" imgUrl="/static/img/svg/close.svg" />
        </div>

        <span
          aria-label="arrow"
          className={css.arrow}
          onClick={() => setShow(!show)}
          onKeyDown={() => false}
          role="button"
          tabIndex={0}
        />
      </div>

      <div className={css.detail}>
        <div className={css.group}>
          <div>
            <p>Receiver</p>
            <span>Denis</span>
          </div>
          <div>
            <p>Email</p>
            <span>123post@gmail.com</span>
          </div>
          <div>
            <p>Occasion</p>
            <span>Birthday</span>
          </div>
          <div>
            <p>Phone</p>
            <span>+ (380) 562 48 65</span>
          </div>
        </div>

        <div className={css.textLine}>
          <p>Description</p>
          <span>Hi, Matthew! Can you wish my friend Den happy birthday? He is a huge fan of yours! Thanks! </span>
        </div>

        <div className={css.check}>
          <Checkbox id="check">
            I want this video to be public (the video will be shown in the celebrity’s profile)
          </Checkbox>
        </div>

        <p className={css.description}>
          Matthew Macconaughey has not seen your request yet. Please, wait till he gets your order.
        </p>
      </div>
    </div>
  );
};
