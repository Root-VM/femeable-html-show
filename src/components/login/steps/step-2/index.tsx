import React from 'react';

import { Input } from '../../../ui/input';
import { Hint } from '../../../ui/hint';
import { Button } from '../../../ui/button';
import { Radio } from '../../../ui/radio';

import css from './step-2.module.scss';

export const Step2: React.FC = () => {
  return (
    <div className={css.box}>
      <p className={css.text}>Please, select the duration of the video you will send to your fans</p>

      <div className={css.radioGroup}>
        <Radio id="1" name="radio">
          30 sec
        </Radio>
        <Radio id="2" name="radio">
          1 min
        </Radio>
        <Radio id="3" name="radio">
          2 min
        </Radio>
        <Radio id="4" name="radio">
          5 min
        </Radio>
        <Hint text="You will have to record a video of the specified duration" imgUrl="/static/img/svg/question.svg" />
      </div>

      <p className={css.text}>Please, set the price for your video</p>

      <div className={css.inputLine}>
        <Input styleType="black" type="text" iconUrl="/static/img/svg/dollar.svg" placeholder="Set your price" />
        <Hint text="You will receive payment for each of your videos." imgUrl="/static/img/svg/question.svg" />
      </div>

      <Button tagType="orange" size="small">
        Create account
      </Button>
    </div>
  );
};
