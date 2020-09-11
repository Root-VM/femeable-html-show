import * as React from 'react';
import css from './category-boxes.module.scss';

export const CategoryBoxes: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.photo}>
        <img src="/static/img/category/1.png" alt="category" />
        <p>Cinema</p>
      </div>
      <div className={css.photo}>
        <img src="/static/img/category/2.png" alt="category" />
        <p>Art</p>
      </div>
      <div className={css.photo}>
        <img src="/static/img/category/3.png" alt="category" />
        <p>Sport</p>
      </div>
      <div className={css.photo}>
        <img src="/static/img/category/4.png" alt="category" />
        <p>Music</p>
      </div>
      <div className={css.photo}>
        <img src="/static/img/category/5.png" alt="category" />
        <p>Politics</p>
      </div>
      <div className={css.photo}>
        <img src="/static/img/category/6.png" alt="category" />
        <p>Social media</p>
      </div>
      <div className={css.photo}>
        <img src="/static/img/category/7.png" alt="category" />
        <p>TV</p>
      </div>
      <div className={css.photo}>
        <img src="/static/img/category/8.png" alt="category" />
        <p>Science</p>
      </div>
      <div className={css.photo}>
        <img src="/static/img/category/9.png" alt="category" />
        <p>Active lfie</p>
      </div>
    </div>
  );
};
