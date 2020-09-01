import React from 'react';
import { Header } from '../../components/layout/header';
import { Back } from '../../components/personal/back';

import css from './order-uploading.module.scss';
import { OrderUploading } from '../../components/order-uploading';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function OrderUploadingPage() {
  return (
    <div className="wrap">
      <Header />

      <div className={css.content}>
        <div className={css.back}>
          <Back />
        </div>
        <OrderUploading color="yellow" />
      </div>
    </div>
  );
}
