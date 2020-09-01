import React from 'react';
import classNames from 'classnames';
import { Search } from '../../components/ui/search';
import { Header } from '../../components/layout/header';
import { Dropdown } from '../../components/ui/dropdown';

import css from './faq.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function FaqPage() {
  return (
    <>
      <div className={classNames('wrap', css.page)}>
        <Header />
        <h2>FAQ</h2>
        <Search placeholder="How can we help?" tagType="orange" />

        <Dropdown
          text="Fameable is a special platfrom that makes you closer to
        your idol. Here you can browse different stars and famous people in
        various branches, choose the person whose work you enjoy, or find the
        favourite star of your friend, neighbour, family member, make an order
        and wait till the celebrity creates a special personolized video for
        you or any other person. Enjoy!"
          title="What is Fameable?"
        />

        <Dropdown
          text="Fameable is a special platfrom that makes you closer to
        your idol. Here you can browse different stars and famous people in
        various branches, choose the person whose work you enjoy, or find the
        favourite star of your friend, neighbour, family member, make an order
        and wait till the celebrity creates a special personolized video for
        you or any other person. Enjoy!"
          title="How can I book a video?"
        />

        <Dropdown
          text="Fameable is a special platfrom that makes you closer to
        your idol. Here you can browse different stars and famous people in
        various branches, choose the person whose work you enjoy, or find the
        favourite star of your friend, neighbour, family member, make an order
        and wait till the celebrity creates a special personolized video for
        you or any other person. Enjoy!"
          title="Where do I pay for the video?"
        />
      </div>
    </>
  );
}
