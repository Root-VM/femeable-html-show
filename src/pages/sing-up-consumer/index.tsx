import React from 'react';
import { Header } from '../../components/layout/header';
import { SingUpBlock } from '../../components/login/sing-up-block';

import css from './sing-up-consumer.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function SingUpConsumerPage() {
  return (
    <div className="wrap">
      <Header />

      <div className={css.content}>
        <SingUpBlock />
        {/* <VerifyEmail /> */}
        {/* <Verified /> */}
      </div>
    </div>
  );
}
