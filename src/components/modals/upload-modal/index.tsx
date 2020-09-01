import React from 'react';

import css from './upload-modal.module.scss';
import { Button } from '../../ui/button';

export const UploadModal: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.element}>
        <img className={css.close} src="/static/img/svg/close.svg" alt="close" />

        <h3>Please, upload a nice video for your fans</h3>

        <div className={css.drag}>
          <div className={css.video}>
            <p className={css.title}>Drag a video </p>
            <p className={css.text}>avi, mov, wmv</p>
            <img src="/static/img/svg/video.svg" alt="video" />

            <input type="file" />
          </div>

          <div className={css.or}>
            <span />
            <p>or</p>
            <span />
          </div>

          <Button size="small" tagType="orange">
            Upload
          </Button>
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
