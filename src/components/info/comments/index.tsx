import React from 'react';

import css from './comments.module.scss';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';
import { Rating } from '../../ui/rating';

export const Comments: React.FC = () => {
  return (
    <div className={css.box}>
      <h2>Did you like the video? Please, give your feedback</h2>

      <div className={css.line}>
        <div className={css.photo}>
          <div>
            <img src="/static/img/people/man.png" alt="man" />
          </div>
          <p>Kile Johnson</p>
          <Rating count={5} activeVal={1} />
        </div>

        <div className={css.text}>
          <Textarea rows={6} />
          <Button size="small" tagType="orange">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
