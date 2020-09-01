import * as React from 'react';
import classNames from 'classnames';
import css from './progress-steps.module.scss';

interface ProgressStepperProps {
  items: Array<{ text: string }>;
  activeStep?: number;
  showProgress?: boolean;
}

export const ProgressStepper: React.FC<ProgressStepperProps> = ({ items, activeStep = 1, showProgress = false }) => {
  return (
    <ul className={classNames(css.steps, showProgress && css.progress)}>
      {items.map((val, i) => {
        return (
          <li className={activeStep > i ? css.active : ''} key={i.toString() + val}>
            <div className={css.point}>
              <p>{val.text}</p>
            </div>
            <span className={css.line} />
          </li>
        );
      })}
    </ul>
  );
};
