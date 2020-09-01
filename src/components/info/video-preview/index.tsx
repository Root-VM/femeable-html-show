import React from 'react';

import css from './video-preview.module.scss';
import { Button } from '../../ui/button';

export const VideoPreview: React.FC = () => {
  return (
    <div className={css.box}>
      <h2>Watch your personal video from Johnny Depp</h2>
      <img src="/static/img/people/Depp2.png" alt="Depp" />
      <a>Have some problems with video?</a>

      <div className={css.btnGroup}>
        <Button size="small" tagType="orangeBorder">
          Share with friends
        </Button>
        <Button size="small" tagType="orange">
          Download
        </Button>
      </div>
    </div>
  );
};
