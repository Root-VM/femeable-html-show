import React from 'react';

import css from './orders-history.module.scss';
import { Sort } from '../../personal/history/sort';
import { OrderLine } from './order-line';

export const OrdersHistory: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.line}>
        <h2>Order History</h2>
        <Sort />
      </div>

      <div className={css.group}>
        <p>New Orders</p>
        <OrderLine color="yellow" />
      </div>

      <div className={css.group}>
        <p>Completed orders</p>
        <OrderLine />
        <OrderLine />
        <OrderLine />
        <OrderLine />
        <OrderLine />
      </div>
      <div className={css.group}>
        <p>Timed-out orders</p>
        <OrderLine color="red" />
        <OrderLine color="red" />
        <OrderLine color="red" />
        <OrderLine color="red" />
        <OrderLine color="red" />
      </div>
    </div>
  );
};
