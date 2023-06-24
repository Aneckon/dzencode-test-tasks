'use client';
import React, { FC } from 'react';
import Image from 'next/image';

import styles from '@/styles/components/PanelProduct.module.scss';
import { ModalDelete } from '../modalDelete';

interface PanelProductProps {
  activePanel?: boolean | undefined;
  image: string;
  title: string;
  type: string;
  serialNumber: number;
  guarantee: { start: string; end: string };
  specification: string;
  price: { isDefault: number; value: number; symbol: string }[];
  order: number;
  date: string;
  products: {
    id: number;
    serialNumber: number;
    isNew: number;
    photo: string;
    title: string;
    type: string;
    specification: string;
    guarantee: {
      start: string;
      end: string;
    };
    price: {
      value: number;
      symbol: string;
      isDefault: number;
    }[];
    order: number;
    date: string;
  }[];
  id: number;
  setOrdersPanel: (
    products: {
      id: number;
      serialNumber: number;
      isNew: number;
      photo: string;
      title: string;
      type: string;
      specification: string;
      guarantee: {
        start: string;
        end: string;
      };
      price: {
        value: number;
        symbol: string;
        isDefault: number;
      }[];
      order: number;
      date: string;
    }[],
  ) => void;
}

export const PanelProduct: FC<PanelProductProps> = ({
  activePanel,
  image,
  title,
  type,
  serialNumber,
  guarantee,
  specification,
  price,
  order,
  date,
  products,
  id,
  setOrdersPanel,
}) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [modalDelete, setModalDelete] = React.useState('No');
  const [modalContent, setModalContent] = React.useState<
    { id: number; photo: string; title: string; type: string }[]
  >([]);
  const handleDelete = (panelId: number) => {
    setOpenModal(true);
    setModalContent(products.filter((item) => item.id === panelId));
  };

  React.useEffect(() => {
    if (modalDelete === 'Yes') {
      setOrdersPanel(products.filter((item) => item.id !== id));
    }
  }, [modalDelete]);

  return (
    <div
      className={
        activePanel === true
          ? `${styles.panelProduct} ${styles.panelProduct__active}`
          : styles.panelProduct
      }>
      <Image src={`http://localhost:3000/${image}`} alt={image} width={50} height={50} />
      <div className={styles.name}>
        <h4>{title}</h4>
        <p>{type}</p>
      </div>
      <div className={styles.serialNumber}>
        <p>{serialNumber}</p>
      </div>
      <div className={styles.date}>
        <p>c {guarantee.start}</p>
        <p>по {guarantee.end}</p>
      </div>
      <div className={styles.specification}>
        <p>{specification}</p>
      </div>
      <div className={styles.price}>
        {price.map((item) => (
          <div key={item.isDefault}>
            <p>{item.value}</p>
            <p>{item.symbol}</p>
          </div>
        ))}
      </div>
      <div className={styles.order}>
        <p>{order}</p>
      </div>
      <div className={styles.date__new}>
        <p>{date}</p>
      </div>
      <div onClick={() => handleDelete(id)} className={styles.delete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M10 12V17"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 12V17"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 7H20"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <ModalDelete
        title={'Ви уверени, что хотите удалить етот продукт?'}
        content={modalContent}
        open={openModal}
        setOpen={setOpenModal}
        setModalDelete={setModalDelete}
      />
    </div>
  );
};
