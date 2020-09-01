import React from 'react';

import { Input } from '../../../ui/input';
import { Hint } from '../../../ui/hint';
import { Checkbox } from '../../../ui/checkbox';
import { Button } from '../../../ui/button';

import css from './step-1.module.scss';

export const Step1: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.inputs}>
        <Input styleType="black" type="text" iconUrl="/static/img/svg/user-black.svg" placeholder="First name" />
        <Input styleType="black" type="text" iconUrl="/static/img/svg/user-black.svg" placeholder="Last name" />
        <Input styleType="black" type="email" iconUrl="/static/img/svg/user-black.svg" placeholder="E-mail" />
        <div className={css.inputLine}>
          <Input styleType="black" type="password" iconUrl="/static/img/svg/password.svg" placeholder="Password" />
          <Hint text="Please enter a secure password of at least 6 characters" imgUrl="/static/img/svg/question.svg" />
        </div>
        <Input styleType="black" type="password" iconUrl="/static/img/svg/password.svg" placeholder="Repeat password" />
      </div>

      <div className={css.check}>
        <Checkbox id="check">I accept all terms and conditions</Checkbox>
      </div>

      <Button tagType="orange" size="small">
        Create account
      </Button>

      <p className={css.bottomText}>
        Already have an account? <a href="#">Log in</a>
      </p>
    </div>
  );
};
