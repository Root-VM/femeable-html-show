import React from 'react';
import classNames from 'classnames';
import css from './order-line.module.scss';
import { Rating } from '../../../ui/rating';

export interface OrderLineProps {
  color?: 'green' | 'yellow' | 'red';
}

export const OrderLine: React.FC<OrderLineProps> = ({ color = 'green' }) => {
  return (
    <div className={classNames(css.box, css[color])}>
      <div className={css.photo}>
        <div>
          <img src="/static/img/people/Kile.png" alt="man" />
        </div>
        <p>Kile Johnson</p>
      </div>

      <div className={css.rating}>
        <Rating count={5} activeVal={2} />
      </div>

      <p className={css.time}> 16.07.2020 2:12 pm</p>

      <p className={css.price}>150$</p>

      <p className={css.status}>Paid</p>

      <div className={css.arrow}>
        <div className={css.arrowHover} />{' '}
      </div>
    </div>
  );
};
