import * as React from 'react';
import css from './search.module.scss';

export interface SearchProps {
  tagType?: 'orange' | 'white';
  placeholder: string;
}

export const Search: React.FC<SearchProps> = ({ tagType = 'white', placeholder }) => {
  return (
    <div className={css[tagType]}>
      <input type="text" placeholder={placeholder} />
      <img src="/static/img/svg/search-white.svg" alt="search" />
    </div>
  );
};
