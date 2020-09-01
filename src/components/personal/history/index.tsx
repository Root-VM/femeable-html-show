import React from 'react';

import css from './history.module.scss';
import { Sort } from './sort';
import { CelebrityDropdown } from './celebrity-dropdown';

export const History: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.line}>
        <h2>Order History</h2>
        <Sort />
      </div>

      <p>New order</p>
      <CelebrityDropdown />
      <CelebrityDropdown />
      <CelebrityDropdown />
      <CelebrityDropdown />
      <CelebrityDropdown />
      <CelebrityDropdown />
      <CelebrityDropdown />
      <CelebrityDropdown />
    </div>
  );
};
