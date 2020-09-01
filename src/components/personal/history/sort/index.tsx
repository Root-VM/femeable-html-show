import React, { useState } from 'react';

import classNames from 'classnames';
import css from './sort.module.scss';

export const Sort: React.FC = () => {
  const [opened, setOpen] = useState(false);

  return (
    <div className={classNames(css.box, opened ? css.open : '')}>
      <div className={css.drop} onClick={() => setOpen(!opened)} onKeyDown={() => false} role="button" tabIndex={0}>
        <p className={css.title}>
          Sort by
          <img src="/static/img/svg/arrow-top.svg" alt="arrow" />
        </p>
        <div className={css.list}>
          <p>Date</p>
          <p>Price</p>
          <p>Status</p>
        </div>
      </div>

      <div className={css.input}>
        <input type="text" />
        <img src="/static/img/svg/search.svg" alt="search" />
      </div>
    </div>
  );
};
