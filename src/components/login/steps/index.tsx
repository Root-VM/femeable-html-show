import React from 'react';
import { Stepper } from '../../ui/stepper';
import { Step1 } from './step-1';

import css from './steps.module.scss';

export const Steps: React.FC = () => {
  return (
    <form className={css.box}>
      <div className={css.bgBlock}>
        <h4>
          Join <span>Fameable</span> right now!
        </h4>
        <p>Your fans are waiting for you</p>
        <img src="/static/img/logo-icon-white.png" alt="icon" />
      </div>

      <div className={css.inputBlock}>
        <h3>Sign up</h3>

        <p>as a celebrity</p>
        <Stepper count={4} activeStep={2} />

        <Step1 />
        {/* <Step2 /> */}
        {/* <Step3 /> */}
        {/* <Step4 /> */}
        {/* <Done /> */}
      </div>
    </form>
  );
};
