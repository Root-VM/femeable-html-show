import * as React from 'react';
import classNames from 'classnames';
import { useState } from 'react';

import css from './dropdown.module.scss';

export interface DropdownProps {
  text: string;
  title: string;
  opened?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({ title, text, opened }) => {
  const [show, setShow] = useState(opened);

  return (
    <div className={classNames(css.dropdown, show ? css.show : false)}>
      <a className={css.title} onClick={() => setShow(!show)} onKeyDown={() => false} role="button" tabIndex={0}>
        {title}
        <img className={css.logo} src="/static/img/svg/arrow-top.svg" alt="arrow" />
      </a>

      <p className={css.text}>{text}</p>
    </div>
  );
};
