import React from 'react';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

import css from './sing-up-block.module.scss';
import { Hint } from '../../ui/hint';
import { Checkbox } from '../../ui/checkbox';

export const SingUpBlock: React.FC = () => {
  return (
    <form className={css.box}>
      <div className={css.bgBlock}>
        <h4>
          Join <span>Fameable</span> right now!
        </h4>
        <p>Get a special video from your idol</p>
        <img src="/static/img/logo-icon-white.png" alt="icon" />
      </div>

      <div className={css.inputBlock}>
        <h3>Sing up</h3>
        <p className={css.smallTitle}>as a consumer</p>

        <div className={css.inputs}>
          <Input styleType="black" type="text" iconUrl="/static/img/svg/user-black.svg" placeholder="First name" />
          <Input styleType="black" type="text" iconUrl="/static/img/svg/user-black.svg" placeholder="Last name" />
          <Input styleType="black" type="email" iconUrl="/static/img/svg/user-black.svg" placeholder="E-mail" />
          <div className={css.inputLine}>
            <Input styleType="black" type="password" iconUrl="/static/img/svg/password.svg" placeholder="Password" />
            <Hint
              text="Please enter a secure password of at least 6 characters"
              imgUrl="/static/img/svg/question.svg"
            />
          </div>

          <Input
            styleType="black"
            type="password"
            iconUrl="/static/img/svg/password.svg"
            placeholder="Repeat password"
          />
        </div>

        <div className={css.check}>
          <Checkbox id="check">I accept all terms and conditions</Checkbox>
        </div>

        <Button tagType="orange" size="small">
          Create account
        </Button>

        <a href="#" className={css.text}>
          Do not have an account? <span>Sign up</span>
        </a>

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
