import React from 'react';
import { Button } from '../../ui/button';

import css from './start.module.scss';

export const Start: React.FC = () => {
  return (
    <div className={css.box}>
      <div>
        <h3>Enjoy the video with your idol on your important day</h3>
        <Button tagType="orange">Find your star</Button>
      </div>

      <div className={css.collage}>
        <div className={css.videoWrap}>
          <video autoPlay muted loop>
            <source src="/static/img/gifs/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={css.videoWrap}>
          <video autoPlay muted loop>
            <source src="/static/img/gifs/video3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={css.videoWrap}>
          <video autoPlay muted loop>
            <source src="/static/img/gifs/video2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={css.videoWrap}>
          <video autoPlay muted loop>
            <source src="/static/img/gifs/video4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};
