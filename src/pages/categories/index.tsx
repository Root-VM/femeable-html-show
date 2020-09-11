import React from 'react';
import { Header } from '../../components/layout/header';

import css from './categories.module.scss';
import { Search } from '../../components/ui/search';
import { CategoryBoxes } from '../../components/categories/category-boxes';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function OrderPage() {
  return (
    <>
      <div className="wrap">
        <Header />

        <div className={css.content}>
          <div className={css.back}>{/* <Back /> */}</div>

          <div className={css.search}>
            <Search placeholder="Find your star" tagType="white" />
          </div>
        </div>
      </div>

      {/* <!-- Caategory 1 screen --> */}

      {/* <CategoryNavigation /> */}
      {/* <div className="wrap"> */}
      {/*  <div className={css.content}> */}
      {/*    <h3> */}
      {/*      <img src="/static/img/logo-icon-orange.png" alt="logo-icon" /> */}
      {/*      Actors */}
      {/*    </h3> */}
      {/*    <div className={css.box}> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*    </div> */}
      {/*    <div className={css.box}> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*    </div> */}
      {/*    <div className={css.box}> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*    </div> */}
      {/*    <h3> */}
      {/*      <img src="/static/img/logo-icon-orange.png" alt="logo-icon" /> */}
      {/*      Actors */}
      {/*    </h3> */}
      {/*    <div className={css.box}> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*    </div> */}
      {/*    <div className={css.box}> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*    </div> */}
      {/*    <div className={css.box}> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*      <VideoItem /> */}
      {/*    </div> */}
      {/*  </div> */}
      {/* </div> */}

      {/* <!-- Caategory 2 screen --> */}

      <div className="wrap">
        <CategoryBoxes />
      </div>
    </>
  );
}
