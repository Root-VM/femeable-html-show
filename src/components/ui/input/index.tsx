import * as React from 'react';
import classNames from 'classnames';
import css from './input.module.scss';

export interface InputProps {
  styleType?: 'black' | 'default';
  type?: string;
  placeholder?: string;
  iconUrl?: string;
  status?: 'disabled' | 'error' | 'success';
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  status = '',
  iconUrl,
  placeholder,
  styleType = 'default',
}) => {
  return (
    <div className={classNames(css[styleType], css[status])}>
      <input type={type} placeholder={placeholder} disabled={status === 'disabled'} />

      {iconUrl && (
        <div className={css.img}>
          <img src={iconUrl} alt="icon" />
        </div>
      )}

      {type === 'password' ? (
        <>
          <button className={css.pIcon} type="button">
            <img src="/static/img/svg/eye.svg" alt="eye" />
          </button>
        </>
      ) : (
        false
      )}

      {status === 'error' && <p className={css.invalidText}>Invalid</p>}
    </div>
  );
};
