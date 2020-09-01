import React from 'react';

import css from './booking-block.module.scss';
import { Radio } from '../ui/radio';
import { Input } from '../ui/input';
import { Select } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';

export const BookingBlock: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.element}>
        <div className={css.column}>
          <div className={css.texts}>
            <h3>Order Details </h3>
            <div className={css.text}>
              Please, write in all the necessary data correctly, to get an individual video from the celebrity{' '}
            </div>
          </div>

          <div className={css.radio}>
            <p>You are booking this video for:</p>
            <Radio id="1" name="radio">
              Myself
            </Radio>
            <Radio id="2" name="radio">
              Someone else
            </Radio>
          </div>

          <div className={css.inputs}>
            <Input placeholder="To" styleType="black" />
            <Input placeholder="From" styleType="black" />
            <Select
              placeholder="Choose the occasion"
              items={[
                { id: 1, text: 'text 1' },
                { id: 2, text: 'text 2' },
              ]}
            />
          </div>
        </div>

        <div className={css.column}>
          <div className={css.photo}>
            <div>
              <img src="/static/img/people/Matthew2.png" alt="man" />
            </div>
            <p className={css.name}>Matthew Mcconaughey</p>
            <p className={css.price}>100$</p>
          </div>

          <div className={css.textGroup}>
            <p>Contact Information</p>
            <p>Here you will receive all information regarding your order</p>
          </div>

          <div className={css.inputs}>
            <Input placeholder="123post@gmail.com" styleType="black" type="email" />
            <Input placeholder="Phone" styleType="black" />
          </div>
        </div>

        <div className={css.textarea}>
          <Textarea rows={4} placeholder="Say a couple of words about yourself to your fans" />
          <Checkbox id="check1">
            I want this video to be public (the video will be shown in the Matthew Mcconaughey’s profile){' '}
          </Checkbox>
        </div>

        <div className={css.borders}>
          <span className={css.active} />
          <span />
        </div>
      </div>

      <div className={css.btnGroup}>
        <Button size="small" tagType="orangeBorder">
          Cancel
        </Button>
        <Button size="small" tagType="orange">
          Next step
        </Button>
      </div>
    </div>
  );
};
