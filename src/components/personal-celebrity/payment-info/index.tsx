import React from 'react';

import css from './payment-info.module.scss';
import { Button } from '../../ui/button';

export const PaymentInfo: React.FC = () => {
  return (
    <div className={css.box}>
      <p className={css.smallTitle}>
        Please, go to your Stripe account, if you want to change your payment information.
      </p>

      <p>There you will find all data about your card and payment process.</p>

      <Button tagType="orange" size="small">
        Go to Stripe
      </Button>
    </div>
  );
};
