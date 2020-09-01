import React from 'react';

import css from './step-4.module.scss';
import { Radio } from '../../../ui/radio';

export const Step4: React.FC = () => {
  return (
    <div className={css.box}>
      <p className={css.text}>
        After creating videos for your fans, you will receive the payment.To receive money, you need to use a Stirpe
        account
      </p>
      <p className={css.title}>Please, register with the Stripe account in order to link your card</p>

      <div className={css.checkboxes}>
        <Radio id="1" name="radio">
          use existent Stripe account
        </Radio>
        <Radio id="2" name="radio">
          create new express Stripe account
        </Radio>
      </div>

      <button className={css.button}>
        <img src="/static/img/login/blue-stripe.png" alt="connect" />
      </button>
    </div>
  );
};
