import React from 'react';

import css from './verified.module.scss';
import { Button } from '../../ui/button';

export const Verified: React.FC = () => {
  return (
    <form className={css.element}>
      <h3>Verified!</h3>
      <p className={css.text}>Please enter the 4 digit code sent to user-1@gmail.com</p>
      <Button tagType="orange" size="small">
        Get started
      </Button>
    </form>
  );
};
