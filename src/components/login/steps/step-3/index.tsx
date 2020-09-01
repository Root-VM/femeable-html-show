import React from 'react';

import { Input } from '../../../ui/input';
import { Button } from '../../../ui/button';
import { Select } from '../../../ui/select';
import { Textarea } from '../../../ui/textarea';
import { Upload } from '../../../ui/upload';

import css from './step-3.module.scss';

export const Step3: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.inputs}>
        <Select
          placeholder="Choose your field of activity"
          items={[
            { id: 1, text: 'text 1' },
            { id: 2, text: 'text 2' },
          ]}
        />

        <Select
          placeholder="Choose your category"
          items={[
            { id: 1, text: 'text 1' },
            { id: 2, text: 'text 2' },
          ]}
        />

        <Input
          styleType="black"
          type="text"
          iconUrl="/static/img/svg/star-black.svg"
          placeholder="I was / participated in..."
        />
        <Textarea placeholder="Say a couple of words about yourself to your fans" />
      </div>

      <p>Please, upload a photograph </p>

      <div className={css.upload}>
        <Upload />
      </div>

      <Button tagType="orange" size="small">
        Next Step
      </Button>
    </div>
  );
};
