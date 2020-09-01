import React from 'react';

import css from './join.module.scss';
import { Button } from '../../ui/button';

export const Join: React.FC = () => {
  return (
    <div className={css.box}>
      <h4>
        Join <span>Fameable</span> right now{' '}
      </h4>
      <p>and make your days more special!</p>
      <Button tagType="orange">Start now</Button>
    </div>
  );
};
