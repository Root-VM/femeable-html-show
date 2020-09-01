import React from 'react';
import { Header } from '../../components/layout/header';
import { LoginBlock } from '../../components/login/login-block';

import css from './login.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function LoginPage() {
  return (
    <div className="wrap">
      <Header />

      <div className={css.content}>
        <LoginBlock />
      </div>
    </div>
  );
}
