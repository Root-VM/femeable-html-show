import React from 'react';
import { Header } from '../../components/layout/header';
import { Back } from '../../components/personal/back';

import css from './booking.module.scss';
import { BookingBlock } from '../../components/booking-block';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function BookingPage() {
  return (
    <div className="wrap">
      <Header />

      <div className={css.content}>
        <div className={css.back}>
          <Back />
        </div>

        <BookingBlock />
      </div>
    </div>
  );
}
