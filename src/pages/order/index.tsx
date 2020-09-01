import React from 'react';
import { Header } from '../../components/layout/header';
import { Back } from '../../components/personal/back';

import css from './order.module.scss';
import { OrderItem } from '../../components/order-item';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function OrderPage() {
  return (
    <div className="wrap">
      <Header />

      <div className={css.content}>
        <div className={css.back}>
          <Back />
        </div>

        <OrderItem color="yellow" />
      </div>
    </div>
  );
}
