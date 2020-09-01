import * as React from 'react';

import css from './textarea.module.scss';

export interface HintProps {
  placeholder?: string;
  rows?: number;
}

export const Textarea: React.FC<HintProps> = ({ placeholder = '', rows = 2 }) => {
  return <textarea className={css.textarea} placeholder={placeholder} rows={rows} />;
};
