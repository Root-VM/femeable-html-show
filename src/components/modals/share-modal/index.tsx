import React from 'react';

import css from './share-modal.module.scss';
import { Input } from '../../ui/input';

export const SharedModal: React.FC = () => {
  return (
    <div className={css.box}>
      <div className={css.element}>
        <img className={css.close} src="/static/img/svg/close.svg" alt="close" />

        <h3>Share your video</h3>

        <div className={css.picture}>
          <img src="/static/img/share/facebook.svg" alt="svg" />
          <img src="/static/img/share/twitter.svg" alt="svg" />
          <img src="/static/img/share/whatsapp.svg" alt="svg" />
          <img src="/static/img/share/telegram.svg" alt="svg" />
          <img src="/static/img/share/viber.svg" alt="svg" />
        </div>

        <p>Or copy link</p>

        <div className={css.input}>
          <Input
            styleType="black"
            type="text"
            iconUrl="/static/img/svg/nexus-black.svg"
            placeholder="https://www.google.com.ua/webhp?tab=rw&authuser=0"
          />
        </div>
      </div>
    </div>
  );
};
