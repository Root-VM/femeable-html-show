import React from 'react';
import { Header } from '../../components/layout/header';
import { Back } from '../../components/personal/back';

import css from './celebrity.module.scss';
import { CelebrityInfo } from '../../components/celebrity/celebriyty-info';
import { CelebrityVideo } from '../../components/celebrity/celebrity-video';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function CelebrityPage() {
  return (
    <div className="wrap">
      <Header />

      <div className={css.content}>
        <div className={css.back}>
          <Back />
        </div>

        <div className={css.row}>
          <CelebrityInfo />
          <CelebrityVideo />
        </div>

        <div className={css.group}>
          <div>
            <img src="/static/img/people/Matthew4.png" alt="Matthew" />
            <img className={css.play} src="/static/img/svg/play-white.svg" alt="play" />
          </div>
          <div>
            <img src="/static/img/people/Matthew5.png" alt="Matthew" />
            <img className={css.play} src="/static/img/svg/play-white.svg" alt="play" />
          </div>
          <div>
            <img src="/static/img/people/Matthew6.png" alt="Matthew" />
            <img className={css.play} src="/static/img/svg/play-white.svg" alt="play" />
          </div>
          <div>
            <img src="/static/img/people/Matthew4.png" alt="Matthew" />
            <img className={css.play} src="/static/img/svg/play-white.svg" alt="play" />
          </div>
          <div>
            <img src="/static/img/people/Matthew5.png" alt="Matthew" />
            <img className={css.play} src="/static/img/svg/play-white.svg" alt="play" />
          </div>
          <div>
            <img src="/static/img/people/Matthew6.png" alt="Matthew" />
            <img className={css.play} src="/static/img/svg/play-white.svg" alt="play" />
          </div>
        </div>
      </div>
    </div>
  );
}
