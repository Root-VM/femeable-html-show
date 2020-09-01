import React from 'react';

import css from './back.module.scss';

export const Back: React.FC = () => {
  return (
    <a className={css.back}>
      <span>&#8592;</span> Back to Fameable
    </a>
  );
};
