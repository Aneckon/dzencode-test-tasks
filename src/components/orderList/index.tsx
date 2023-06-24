'use client';
import React, { FC } from 'react';

import { PanelOrder } from '../panelOrder';

import { orders } from '../utils';

import styles from '@/styles/components/OrderList.module.scss';

interface OrderListProps {
  activePanel?: boolean;
  setCounter: (orders: number) => void;
}

export const OrderList: FC<OrderListProps> = ({ activePanel, setCounter }) => {
  const [ordersPanel, setOrdersPanel] = React.useState(orders);

  React.useEffect(() => {
    setCounter(ordersPanel.length);
  }, [ordersPanel]);

  return (
    <div
      className={
        activePanel === true ? `${styles.orderList} ${styles.orderList__active}` : styles.orderList
      }>
      {ordersPanel.map((item) => (
        <PanelOrder
          key={item.id}
          id={item.id}
          activePanel={activePanel}
          title={item.title}
          price={item.products[0].price}
          productsNum={item.products.length}
          date={item.date}
          products={ordersPanel}
          setOrdersPanel={setOrdersPanel}
        />
      ))}
    </div>
  );
};
