import React from 'react';

import css from './cover-edit-modal.module.scss';
import { Button } from '../../ui/button';

export const CoverEditModal: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.element}>
        <img className={css.close} src="/static/img/svg/close.svg" alt="close" />

        <h3> Your video is being uploaded</h3>

        <div className={css.imgGroup}>
          <img src="/static/img/people/Depp3.png" alt="Depp" />
          <img src="/static/img/people/Depp-cover.png" alt="Depp" />
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
