import * as React from 'react';
import classNames from 'classnames';
import { useState } from 'react';

import css from './select.module.scss';

export interface SelectProps {
  placeholder: string;
  items: Array<{ id: number; text: string }>;
}

export const Select: React.FC<SelectProps> = ({ placeholder, items }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({ id: 0, text: '' });

  return (
    <div className={classNames(css.dropdown, show ? css.show : false)}>
      <a className={css.title} onClick={() => setShow(!show)} onKeyDown={() => false} role="button" tabIndex={0}>
        <img src="/static/img/svg/pointer.svg" alt="pointer" />
        {!value.id ? <p className={css.placeholder}>{placeholder}</p> : <p className={css.value}>{value.text}</p>}
        <img className={css.logo} src="/static/img/svg/arrow-top.svg" alt="arrow" />
      </a>

      <ul className={css.items}>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <a
                role="presentation"
                onClick={() => setValue(item)}
                className={item.id === value.id ? css.active : ''}
                onKeyDown={() => false}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
