import React from 'react';

import css from './confirm-modal.module.scss';
import { Button } from '../../ui/button';

export const ConfirmModal: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.element}>
        <img className={css.close} src="/static/img/svg/close.svg" alt="close" />

        <p className={css.smallTitle}>You just earned 50$</p>

        <h3>
          Thank you! <br />
          Your video have been succesfully published!
        </h3>

        <p className={css.text}>John will see the video very soon </p>

        <div className={css.btnGroup}>
          <Button size="small" tagType="orangeBorder">
            Back to my orders
          </Button>
          <Button size="small" tagType="orange">
            Continue in Fameable
          </Button>
        </div>
      </div>
    </div>
  );
};
