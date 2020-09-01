import React from 'react';
import { Header } from '../../components/layout/header';
import { Back } from '../../components/personal/back';
import { VideoPreview } from '../../components/info/video-preview';

import css from './order-info.module.scss';
import { Comments } from '../../components/info/comments';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function OrderInfoPage() {
  return (
    <div className="wrap">
      <Header />

      <div className={css.content}>
        <div className={css.back}>
          <Back />
        </div>
        <div className={css.preview}>
          <VideoPreview />
        </div>
        <Comments />
      </div>
    </div>
  );
}
