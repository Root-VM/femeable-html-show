import React from 'react';

import css from './information-edit.module.scss';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

export const InformationEdit: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.inputs}>
        <Input styleType="black" type="text" iconUrl="/static/img/svg/user-black.svg" placeholder="First name" />
        <Input styleType="black" type="email" iconUrl="/static/img/svg/email-black.svg" placeholder="E-mail" />
        <Input styleType="black" type="text" iconUrl="/static/img/svg/user-black.svg" placeholder="Last name" />
        <Input styleType="black" type="text" iconUrl="/static/img/svg/phone-black.svg" placeholder="Phone" />
      </div>

      <div className={css.btnGroup}>
        <Button tagType="orangeBorder" size="small">
          Cancel
        </Button>
        <Button tagType="orange" size="small">
          Save changes
        </Button>
      </div>
    </div>
  );
};
