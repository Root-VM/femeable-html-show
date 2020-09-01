import React from 'react';

import css from './done.module.scss';
import { Button } from '../../../ui/button';

export const Done: React.FC = () => {
  return (
    <div className={css.box}>
      <p className={css.title}>Congratulations!</p>
      <p className={css.text}>Your Stripe account has been created successfully!</p>
      <Button size="small" tagType="orange">
        Complete registration
      </Button>
    </div>
  );
};
