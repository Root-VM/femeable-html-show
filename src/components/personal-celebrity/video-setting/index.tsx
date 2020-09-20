import React from 'react';

import css from './video-setting.module.scss';
import { Button } from '../../ui/button';
import { Upload } from '../../ui/upload';
import { Hint } from '../../ui/hint';
import { Radio } from '../../ui/radio';
import { Input } from '../../ui/input';

export const VideoSetting: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.row}>
        <div className={css.upload}>
          <p>Please, upload your promotion video</p>
          <Upload />
        </div>

        <div className={css.data}>
          <div className={css.text}>
            <p>Please, select video duration</p>
            <Hint
              text="You will have to record a video of the specified duration"
              imgUrl="/static/img/svg/question.svg"
            />
          </div>
          <div className={css.radio}>
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
          </div>

          <div className={css.text}>
            <p>Please, select video duration</p>
            <Hint text="You will receive payment for each of your videos." imgUrl="/static/img/svg/question.svg" />
          </div>

          <Input styleType="black" type="text" iconUrl="/static/img/svg/dollar.svg" placeholder="Set your price" />
        </div>
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
