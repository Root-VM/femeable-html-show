import * as React from 'react';
import classNames from 'classnames';
import css from './stepper.module.scss';

export interface StepperProps {
  count: number;
  activeStep?: number;
  showProgress?: boolean;
}

export const Stepper: React.FC<StepperProps> = ({ count, activeStep = 1, showProgress = false }) => {
  return (
    <ul className={classNames(css.steps, showProgress && css.progress)}>
      {[...Array(count)].map((val, i) => {
        return (
          <li className={activeStep > i ? css.active : ''} key={i.toString() + val}>
            <span className={css.point} />
            <span className={css.line} />
          </li>
        );
      })}
    </ul>
  );
};
