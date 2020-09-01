import React from 'react';
import { Header } from '../../components/layout/header';
import { Back } from '../../components/personal/back';

import css from './categories.module.scss';
import { Search } from '../../components/ui/search';
import { CategoryNavigation } from '../../components/categories/category-navigation';
import { VideoItem } from '../../components/video-item';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function OrderPage() {
  return (
    <>
      <div className="wrap">
        <Header />

        <div className={css.content}>
          <div className={css.back}>
            <Back />
          </div>

          <div className={css.search}>
            <Search placeholder="Find your star" tagType="white" />
          </div>
        </div>
      </div>

      <CategoryNavigation />

      <div className="wrap">
        <div className={css.content}>
          <div className={css.box}>
            <h3>
              <img src="/static/img/logo-icon-orange.png" alt="logo-icon" />
              Actors
            </h3>
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
          </div>
          <div className={css.box}>
            <h3>
              <img src="/static/img/logo-icon-orange.png" alt="logo-icon" />
              Actors
            </h3>
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
          </div>
        </div>
      </div>
    </>
  );
}
