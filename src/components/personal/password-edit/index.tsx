import React from 'react';
import { Button } from '../../ui/button';

import css from './password-edit.module.scss';
import { Input } from '../../ui/input';
import { Hint } from '../../ui/hint';

export const PasswordEdit: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.inputs}>
        <Input styleType="black" type="password" iconUrl="/static/img/svg/password.svg" placeholder="Password" />

        <div className={css.inputLine}>
          <Input styleType="black" type="password" iconUrl="/static/img/svg/password.svg" placeholder="Password" />
          <Hint text="Please enter a secure password of at least 6 characters" imgUrl="/static/img/svg/question.svg" />
        </div>

        <Input styleType="black" type="password" iconUrl="/static/img/svg/password.svg" placeholder="Password" />
      </div>
      <Button size="small" tagType="orange">
        Save changes
      </Button>
    </div>
  );
};
