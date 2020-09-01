import React from 'react';
import { Header } from '../../components/layout/header';
import { Steps } from '../../components/login/steps';

import css from './sing-up-selebrity.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function SingUpConsumerPage() {
  return (
    <div className="wrap">
      <Header />

      <div className={css.content}>
        <Steps />
      </div>
    </div>
  );
}
