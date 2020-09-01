import React from 'react';

import classNames from 'classnames';
import css from './order-uploading.module.scss';
import { Button } from '../ui/button';
import { ProgressStepper } from './progress-steps';

interface OrderUploadingProps {
  color?: 'green' | 'yellow' | 'red';
}

export const OrderUploading: React.FC<OrderUploadingProps> = ({ color = 'green' }) => {
  return (
    <div className={classNames(css.box, css[color])}>
      <div className={css.group}>
        <div className={css.info}>
          <div className={css.photo}>
            <div>
              <img src="/static/img/people/guy.png" alt="guy" />
            </div>
            <p>Kile Johnson</p>
          </div>

          <div className={css.line}>
            <div>
              <strong>From</strong>
              <p>Jim</p>
            </div>
            <div>
              <strong>Occasion</strong>
              <p>Birthday</p>
            </div>
          </div>

          <div className={css.line}>
            <div>
              <strong>To</strong>
              <p>John</p>
            </div>
            <div>
              <strong>Order Date</strong>
              <p>16.07.2020</p>
            </div>
          </div>

          <div className={css.description}>
            <strong>Description</strong>
            <p>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit
              dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
              aute id deserunt nisi.
            </p>
          </div>
        </div>

        <div className={css.photoGroup}>
          <img src="/static/img/people/Depp2.png" alt="people" />
          <img className={css.close} src="/static/img/svg/close.svg" alt="icon" />
        </div>
      </div>

      <div className={css.steps}>
        <ProgressStepper
          items={[{ text: 'uploaded' }, { text: 'queued' }, { text: 'processing' }, { text: 'ready' }]}
          activeStep={2}
          showProgress
        />
      </div>

      <div className={css.btnGroup}>
        <Button tagType="orangeBorder" size="small">
          Decline
        </Button>
        <Button tagType="orange" size="small">
          Accept
        </Button>
      </div>
    </div>
  );
};
