import React from 'react';

import css from './congratulation-modal.module.scss';
import { Button } from '../../ui/button';

export const CongratulationModal: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.element}>
        <img className={css.close} src="/static/img/svg/close.svg" alt="close" />

        <h3>Congratulations!</h3>
        <p className={css.smallTitle}>You have successfully ordered a personolized video</p>
        <p className={css.text}>
          <strong>Johnny Depp</strong> will see your request and make a special video for you within{' '}
          <strong>7 days.</strong> After that, you will receive a link to your video via email, or you can also find it
          in your personal account.
        </p>

        <Button size="small" tagType="orange">
          Continue in Fameable
        </Button>
      </div>
    </div>
  );
};
