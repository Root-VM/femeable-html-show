import React from 'react';

import css from './verify-email.module.scss';
import { Button } from '../../ui/button';

export const VerifyEmail: React.FC = () => {
  return (
    <form className={css.element}>
      <div className={css.box}>
        <h3>Verify your email</h3>
        <p className={css.text}>Please enter the 4 digit code sent to user-1@gmail.com</p>

        <div className={css.inputs}>
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
        </div>

        <p className={css.otp}>
          Didn’t receive OTP? <a href="#">Resend code</a>
        </p>

        <Button tagType="orange" size="small">
          Verify
        </Button>
      </div>
    </form>
  );
};
