'use client';
import React from 'react';
import { PageHead } from '@/components/pageHead';
import { PanelProduct } from '@/components/panelProduct';
import { orders } from '@/components/utils';

import styles from '@/styles/page/page.module.scss';

export default function Products() {
  const [ordersPanel, setOrdersPanel] = React.useState(orders[0].products);
  const [typeSearch, setTypeSearch] = React.useState('');

  return (
    <section className={`${styles.main} main`}>
      <PageHead
        typeSearch={typeSearch}
        setTypeSearch={setTypeSearch}
        title={'Продукти'}
        number={ordersPanel.length}
      />
      {ordersPanel
        .filter((item) => {
          const type = item.type.toLocaleLowerCase();
          return type.includes(typeSearch.toLocaleLowerCase() || typeSearch.toLocaleUpperCase());
        })
        .map((item) => (
          <PanelProduct
            key={item.id}
            id={item.id}
            products={ordersPanel}
            image={item.photo}
            title={item.title}
            type={item.type}
            serialNumber={item.serialNumber}
            guarantee={item.guarantee}
            specification={item.specification}
            price={item.price}
            order={item.order}
            date={item.date}
            setOrdersPanel={setOrdersPanel}
          />
        ))}
    </section>
  );
}
