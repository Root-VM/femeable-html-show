import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import css from './header.module.scss';

export const Header: React.FC = () => {
  const [menuOpened, setOpen] = useState(false);

  const [detailsOpened, setDetail] = useState(false);

  return (
    <header className={classNames(css.header, menuOpened ? css.opened : false)}>
      <div className={css.logo}>
        <img src="/static/img/logo.png" alt="logo" />
      </div>

      <ul>
        {/* <li className={css.active}> */}
        {/*  <Link href="/"> */}
        {/*    <a>Celebrities</a> */}
        {/*  </Link> */}
        {/* </li> */}
        {/* <li> */}
        {/*  <Link href="/"> */}
        {/*    <a>Log in</a> */}
        {/*  </Link> */}
        {/* </li> */}
        {/* <li> */}
        {/*  <Link href="/"> */}
        {/*    <a>Sign up</a> */}
        {/*  </Link> */}
        {/* </li> */}

        <li>
          <Link href="/">
            <a> Celebrities </a>
          </Link>
        </li>
        <li className={css.active}>
          <a onClick={() => setDetail(!detailsOpened)} onKeyDown={() => false} role="button" tabIndex={0}>
            <img src="/static/img/svg/user.svg" alt="user" />
            Hello, Yuliia Leniv
          </a>

          <div className={classNames(css.menuBox, detailsOpened ? css.detailShow : '')}>
            <Link href="/">
              <a>Personal information</a>
            </Link>
            <Link href="/">
              <a>Order history</a>
            </Link>
            <Link href="/">
              <a>Change password</a>
            </Link>
            <Link href="/">
              <a>Log out</a>
            </Link>
          </div>
        </li>
      </ul>

      <div className={css.controls}>
        <button onClick={() => setOpen(!menuOpened)}>
          {menuOpened ? (
            <img src="/static/img/svg/close.svg" alt="close" />
          ) : (
            <img src="/static/img/svg/burger.svg" alt="burger" />
          )}
        </button>
      </div>
    </header>
  );
};
