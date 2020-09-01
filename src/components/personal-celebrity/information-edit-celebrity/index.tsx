import React from 'react';

import css from './information-edit-celebrity.module.scss';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Select } from '../../ui/select';
import { Textarea } from '../../ui/textarea';

export const InformationEditCelebrity: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.inputs}>
        <Input styleType="black" type="text" iconUrl="/static/img/svg/user-black.svg" placeholder="First name" />
        <Select
          placeholder="Choose your field of activity"
          items={[
            { id: 1, text: 'text 1' },
            { id: 2, text: 'text 2' },
          ]}
        />

        <Input styleType="black" type="text" iconUrl="/static/img/svg/user-black.svg" placeholder="Last name" />
        <Select
          placeholder="Choose your category"
          items={[
            { id: 1, text: 'text 1' },
            { id: 2, text: 'text 2' },
          ]}
        />

        <Input styleType="black" type="email" iconUrl="/static/img/svg/email-black.svg" placeholder="E-mail" />
        <Input
          styleType="black"
          type="text"
          iconUrl="/static/img/svg/star-black.svg"
          placeholder="I was / participated in..."
        />

        <Input styleType="black" type="text" iconUrl="/static/img/svg/phone-black.svg" placeholder="Phone" />
        <Textarea placeholder="Say a couple of words about yourself to your fans" rows={2} />
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
