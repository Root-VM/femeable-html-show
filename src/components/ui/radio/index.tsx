import * as React from 'react';

import css from './radio.module.scss';

export interface HintProps {
  id: string;
  name: string;
}

export const Radio: React.FC<HintProps> = ({ id, name, children }) => {
  return (
    <div className={css.radio}>
      <input id={id} name={name} type="radio" />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
