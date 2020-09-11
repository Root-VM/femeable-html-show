import React from 'react';
import { Header } from '../../components/layout/header';

import css from './personal-profile-celebrity.module.scss';
import { MenuPersonal } from '../../components/layout/menu-personal';
import { Back } from '../../components/personal/back';
import { UserPhotoUpload } from '../../components/personal/user-photo-upload';
import { OrdersHistory } from '../../components/personal-celebrity/orders-history';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function PersonalInfoCustomer() {
  return (
    <div className="wrap">
      <Header />

      <div className={css.box}>
        <div className={css.left}>
          <div className={css.back}>
            <Back />
          </div>

          <div className={css.upload}>
            <UserPhotoUpload />
          </div>

          <MenuPersonal
            data={[
              { text: 'Personal information', active: true },
              { text: 'Change password', active: false },
              { text: 'Video settings', active: false },
              { text: 'Payment details', active: false },
              { text: 'View order history', active: false },
            ]}
          />
        </div>

        <div className={css.content}>
          {/* <h2>Personal Information</h2> */}
          {/* <InformationEditCelebrity /> */}
          {/* <VideoSetting /> */}
          {/* <PaymentInfo /> */}
          <OrdersHistory />
        </div>
      </div>
    </div>
  );
}
