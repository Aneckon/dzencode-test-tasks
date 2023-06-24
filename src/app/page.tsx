'use client';
import React from 'react';
import { PageHead } from '@/components/pageHead';
import { OrderList } from '@/components/orderList';

import styles from '@/styles/page/Page.module.scss';

export default function Home() {
  const [counter, setCounter] = React.useState(0);

  return (
    <section className={`${styles.main} main`}>
      <PageHead
        title={'Приходи'}
        number={counter === 0 ? 'loading...' : counter}
      />
      <OrderList setCounter={setCounter} />
    </section>
  );
}
