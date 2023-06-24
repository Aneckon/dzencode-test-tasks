'use client';
import React from 'react';
import { OrderList } from '@/components/orderList';
import { PageHead } from '@/components/pageHead';

import styles from '@/styles/page/page.module.scss';

export default function Orders() {
  const [counter, setCounter] = React.useState(0);

  return (
    <section className={`${styles.main} main`}>
      <PageHead title={'Приходи'} number={counter === 0 ? 'loading...' : counter} />
      <OrderList setCounter={setCounter} />
    </section>
  );
}
