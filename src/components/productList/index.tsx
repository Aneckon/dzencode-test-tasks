'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

import { orders } from '../utils';
import { PanelProduct } from '../panelProduct';

import styles from '@/styles/components/ProductList.module.scss';

interface ProductListProps {
  activePanel?: boolean;
  id: string;
}

export const ProductList: FC<ProductListProps> = ({ activePanel, id }) => {
  const router = useRouter();

  const [ordersPanel, setOrdersPanel] = React.useState(orders[Number(id) - 1].products);

  return (
    <div className={styles.productList}>
      <h2>Lorem ipsum dolor sit amet consectetur.</h2>
      <div className={styles.productList__add}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            width="30px"
            height="30px"
            viewBox="0 0 32 32">
            <path d="M9,17h6v6a1,1,0,0,0,2,0V17h6a1,1,0,0,0,0-2H17V9a1,1,0,0,0-2,0v6H9a1,1,0,0,0,0,2Z" />
          </svg>
        </div>

        <p>Добавити продукт</p>
      </div>
      <div className={styles.productList__list}>
        {ordersPanel.map((item) => (
          <PanelProduct
            key={item.id}
            activePanel={activePanel}
            image={item.photo}
            title={item.title}
            type={item.type}
            serialNumber={item.serialNumber}
            guarantee={item.guarantee}
            specification={item.specification}
            price={item.price}
            order={item.order}
            date={item.date}
            products={ordersPanel}
            id={item.id}
            setOrdersPanel={setOrdersPanel}
          />
        ))}
      </div>
      <div onClick={() => router.push('/')} className={styles.back}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000"
          width="30px"
          height="30px"
          viewBox="0 0 32 32">
          <path d="M9,17h6v6a1,1,0,0,0,2,0V17h6a1,1,0,0,0,0-2H17V9a1,1,0,0,0-2,0v6H9a1,1,0,0,0,0,2Z" />
        </svg>
      </div>
    </div>
  );
};
