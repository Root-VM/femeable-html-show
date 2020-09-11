import React from 'react';
import { Header } from '../../components/layout/header';

import css from './personal-info-customer.module.scss';
import { MenuPersonal } from '../../components/layout/menu-personal';
import { Back } from '../../components/personal/back';
import { UserPhotoUpload } from '../../components/personal/user-photo-upload';
import { History } from '../../components/personal/history';

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
              { text: 'View order history', active: false },
              { text: 'Change password', active: false },
            ]}
          />
        </div>

        <div className={css.content}>
          {/* <h2>Personal Information</h2> */}

          {/* <InformationEdit /> */}
          {/* <PasswordEdit /> */}
          <History />
        </div>
      </div>
    </div>
  );
}
