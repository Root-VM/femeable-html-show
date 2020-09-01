import * as React from 'react';
import css from './menu-personal.module.scss';

export interface MenuProps {
  data: Array<{ text: string; active: boolean }>;
}

export const MenuPersonal: React.FC<MenuProps> = ({ data }) => {
  return (
    <ul className={css.menu}>
      {data.map((item, i) => {
        return (
          <li className={item.active ? css.active : ''} key={i.toString()}>
            <a href="#">{item.text}</a>
          </li>
        );
      })}
    </ul>
  );
};
