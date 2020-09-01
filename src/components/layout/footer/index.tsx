import React from 'react';
import Link from 'next/link';
import css from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={css.footer}>
      <div className={css.line}>
        <div>
          <img className={css.logo} src="/static/img/logo-footer.png" alt="logo" />
          <p>
            <img src="/static/img/svg/location.svg" alt="location" />
            Switzerland
          </p>
          <p>
            <img src="/static/img/svg/phone.svg" alt="phone" />
            +41-745-5572-03
          </p>
        </div>

        <div>
          <Link href="/">
            <a>Sign in</a>
          </Link>
          <Link href="/">
            <a>Sign up as a celebrity</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>FAQ</a>
          </Link>
          <Link href="/">
            <a>Support</a>
          </Link>
          <Link href="/">
            <a>Terms & Conditions</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>Terms & Conditions</a>
          </Link>
          <Link href="/">
            <a>Impressum</a>
          </Link>
          <Link href="/">
            <a>Impressum</a>
          </Link>
        </div>
      </div>

      <div className={css.lastLine}>
        <span>All rigts reserved, 2020</span>

        <div>
          <img src="/static/img/svg/youtube.svg" alt="youtube" />
          <img src="/static/img/svg/facebook.svg" alt="facebook" />
          <img src="/static/img/svg/instagram.svg" alt="instagram" />
          <img src="/static/img/svg/twitter.svg" alt="twitter" />
          <img src="/static/img/svg/email.svg" alt="email" />
        </div>
      </div>
    </footer>
  );
};
