import * as React from 'react';
import classNames from 'classnames';
import css from './button.module.scss';

export interface ButtonProps {
  tagType?: 'orange' | 'orangeBorder' | 'default';
  size?: 'small';
}
export const Button: React.FC<ButtonProps> = ({ tagType = 'default', size = '', children }) => {
  return (
    <button className={classNames(css[tagType], css[size])} aria-label="btn" type="button">
      {children}
    </button>
  );
};
