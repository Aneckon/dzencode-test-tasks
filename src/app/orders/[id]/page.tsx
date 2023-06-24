'use client';
import React from 'react';
import { PageHead } from '@/components/pageHead';
import { OrderList } from '@/components/orderList';
import { ProductList } from '@/components/productList';

import styles from '@/styles/page/page.module.scss';

export default function ProductsItem({ params }: { params: { id: string } }) {
  const [counter, setCounter] = React.useState(0);

  return (
    <section className={`${styles.main} main`}>
      <PageHead title={'Приходи'} number={counter === 0 ? 'loading...' : counter} />
      <div style={{ display: 'flex' }}>
        <OrderList setCounter={setCounter} activePanel={true} />
        <ProductList activePanel={true} id={params.id} />
      </div>
    </section>
  );
}
