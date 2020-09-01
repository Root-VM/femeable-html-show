import React from 'react';

import classNames from 'classnames';
import css from './order-item.module.scss';
import { Button } from '../ui/button';

interface OrderItemProps {
  color?: 'green' | 'yellow' | 'red';
}

export const OrderItem: React.FC<OrderItemProps> = ({ color = 'green' }) => {
  return (
    <div className={classNames(css.box, css[color])}>
      <h2>One of your fans requested a video from you</h2>

      <div className={css.photo}>
        <div>
          <img src="/static/img/people/guy.png" alt="guy" />
        </div>
        <p>Kile Johnson</p>
      </div>

      <div className={css.line}>
        <div>
          <strong>From</strong>
          <p>Jim</p>
        </div>
        <div>
          <strong>Occasion</strong>
          <p>Birthday</p>
        </div>
      </div>

      <div className={css.line}>
        <div>
          <strong>To</strong>
          <p>John</p>
        </div>
        <div>
          <strong>Order Date</strong>
          <p>16.07.2020</p>
        </div>
      </div>

      <div className={css.description}>
        <strong>Description</strong>
        <p>
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit
          dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute
          id deserunt nisi.
        </p>
      </div>

      <div className={css.btnGroup}>
        <Button tagType="orangeBorder" size="small">
          Decline
        </Button>
        <Button tagType="orange" size="small">
          Accept
        </Button>
      </div>
    </div>
  );
};
