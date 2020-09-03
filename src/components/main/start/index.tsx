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
        <div><img src="/static/img/gifs/triangle.png" alt="collage" /></div>
        <div><img src="/static/img/gifs/triangle.png" alt="collage" /></div>
        <div><img src="/static/img/gifs/triangle2.png" alt="collage" /></div>
        <div><img src="/static/img/gifs/triangle.png" alt="collage" /></div>
      </div>
    </div>
  );
};
