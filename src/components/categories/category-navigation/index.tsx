import * as React from 'react';
import css from './category-navigation.module.scss';

export const CategoryNavigation: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.element}>
        <h4>
          <img src="/static/img/logo-icon-white.png" alt="logo-icon" />
          Cinema
        </h4>

        <ul>
          <li>
            <a href="#">Actors</a>
          </li>
          <li>
            <a href="#">Directors</a>
          </li>
          <li>
            <a href="#">Producers</a>
          </li>
          <li>
            <a href="#">Critics</a>
          </li>
          <li>
            <a href="#">Stuntmen</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
