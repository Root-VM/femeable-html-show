import React from 'react';

import css from './dissatisfied-modal.module.scss';
import { Radio } from '../../ui/radio';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';

export const DissatisfiedModal: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.element}>
        <img className={css.close} src="/static/img/svg/close.svg" alt="close" />

        <h3> Dissatisfied with the video?</h3>
        <p>Please, indicate what happened</p>
        <div className={css.radio}>
          <Radio id="1" name="radio">
            inappropriate lexis
          </Radio>
          <Radio id="2" name="radio">
            abuse
          </Radio>
          <Radio id="3" name="radio">
            inappropriate behavior
          </Radio>
          <Radio id="4" name="radio">
            other
          </Radio>
        </div>

        <Textarea rows={3} />

        <div className={css.btnGroup}>
          <Button size="small" tagType="orangeBorder">
            Cancel
          </Button>
          <Button size="small" tagType="orange">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
