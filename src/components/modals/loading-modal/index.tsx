import React from 'react';

import css from './loading-modal.module.scss';
import { Button } from '../../ui/button';

export const LoadingModal: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.element}>
        <img className={css.close} src="/static/img/svg/close.svg" alt="close" />

        <h3> Your video is being uploaded</h3>

        <div className={css.loadLine}>
          <div className={css.progress} style={{ width: '45%' }}>
            <span>45%</span>
          </div>
        </div>

        <div className={css.btnGroup}>
          <Button size="small" tagType="orangeBorder">
            Cancel
          </Button>
          <Button size="small" tagType="orange">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
