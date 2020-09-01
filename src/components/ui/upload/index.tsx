import * as React from 'react';
import css from './upload.module.scss';
import { Button } from '../button';

export const Upload: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.content}>
        <h4>Drag a photo</h4>
        <p>jpg, jpeg, png</p>
        <img src="/static/img/svg/camera.svg" alt="camera" />

        <input type="file" />
      </div>

      <div className={css.or}>
        <span />
        <p>or</p>
        <span />
      </div>

      <Button tagType="orange" size="small">
        Upload
      </Button>
    </div>
  );
};
