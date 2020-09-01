import React from 'react';

import css from './user-photo-upload.module.scss';
import { Button } from '../../ui/button';

export const UserPhotoUpload: React.FC = () => {
  return (
    <div className={css.box}>
      <img src="/static/img/drag-photo.png" alt="drag" />

      <Button size="small" tagType="orange">
        Upload
      </Button>

      <input type="file" />
    </div>
  );
};
