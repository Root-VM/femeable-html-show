import React from 'react';

import css from './login-block.module.scss';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

export const LoginBlock: React.FC = () => {
  return (
    <form className={css.box}>
      <div className={css.bgBlock}>
        <h4>
          Welcome back on <br /> <span>Fameable</span>
        </h4>
        <p>Ready to start?</p>
        <img src="/static/img/logo-icon-white.png" alt="icon" />
      </div>

      <div className={css.inputBlock}>
        <h3>Log in</h3>

        <Input styleType="black" type="email" iconUrl="/static/img/svg/email-black.svg" placeholder="E-mail" />
        <Input styleType="black" type="password" iconUrl="/static/img/svg/password.svg" placeholder="Password" />

        <a href="#">Forgot password?</a>

        <Button tagType="orange" size="small">
          Create account
        </Button>

        <p>
          Do not have an account? <a href="#">Sign up</a>
        </p>

        <p className={css.or}>
          {' '}
          <span /> or <span />
        </p>

        <div className={css.icons}>
          <img src="/static/img/login/google.svg" alt="google" />
          <img src="/static/img/login/facebook.svg" alt="facebook" />
        </div>
      </div>
    </form>
  );
};
