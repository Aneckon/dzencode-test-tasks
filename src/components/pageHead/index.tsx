import React, { FC } from 'react';

import styles from '@/styles/components/PageHead.module.scss';
import { Select } from '../select';

interface PageHeadProps {
  title: string;
  number: number | string;
  typeSearch?: string;
  setTypeSearch?: (value: string) => void;
}

export const PageHead: FC<PageHeadProps> = ({ title, number, typeSearch, setTypeSearch }) => {
  return (
    <div className={styles.pageHead}>
      {title !== 'Продукти' && (
        <div className={styles.pageHead__plus}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            width="30px"
            height="30px"
            viewBox="0 0 32 32">
            <path d="M9,17h6v6a1,1,0,0,0,2,0V17h6a1,1,0,0,0,0-2H17V9a1,1,0,0,0-2,0v6H9a1,1,0,0,0,0,2Z" />
          </svg>
        </div>
      )}
      <h1>{title}</h1>
      <span>/</span>
      <p>{number}</p>
      {title !== 'Продукти' && ''}
      {title === 'Продукти' && (
        <Select
          value={typeSearch}
          onChange={setTypeSearch}
          label={'Тип: '}
          types={[
            { id: 1, name: 'Monitors', value: 'Monitors' },
            { id: 2, name: 'Monitors2', value: 'Monitors2' },
            { id: 3, name: 'Monitors3', value: 'Monitors3' },
          ]}
        />
      )}
    </div>
  );
};
