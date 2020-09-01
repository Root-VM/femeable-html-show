import React from 'react';

import css from './main.module.scss';
import { Header } from '../../components/layout/header';
import { Start } from '../../components/main/start';
import { VideoItem } from '../../components/video-item';
import { Instruction } from '../../components/main/instruction';
import { Join } from '../../components/main/join';
import { CommentsSlider } from '../../components/main/comments-slider';
import { Footer } from '../../components/layout/footer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function MainPage() {
  return (
    <>
      <div className="wrap">
        <Header />
        <Start />

        <div className={css.line}>
          <h4>
            <img src="/static/img/svg/logo-icon.svg" alt="logo" />
            Recommended
          </h4>
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </div>

        <div className={css.line}>
          <h4>
            <img src="/static/img/svg/logo-icon.svg" alt="logo" />
            Newly registered stars
          </h4>
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </div>

        <Instruction />
      </div>

      <Join />

      <div className="wrap">
        <CommentsSlider />
      </div>

      <Footer />
    </>
  );
}
