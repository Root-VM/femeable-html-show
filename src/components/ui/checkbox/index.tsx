import * as React from 'react';

import css from './checkbox.module.scss';

export interface HintProps {
  id: string;
}

export const Checkbox: React.FC<HintProps> = ({ id = 'check', children }) => {
  return (
    <div className={css.checkbox}>
      <input id={id} name={id} type="checkbox" />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
