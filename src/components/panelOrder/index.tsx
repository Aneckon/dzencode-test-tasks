import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@/styles/components/PanelOrder.module.scss';
import { ModalDelete } from '../modalDelete';

interface PanelOrderProps {
  id: number;
  title: string;
  productsNum: number;
  date: string;
  price: { value: number; symbol: string }[];
  activePanel: boolean | undefined;
  products: {
    id: number;
    photo?: string;
    title: string;
    type?: string;
  }[];
  setOrdersPanel: (id: any) => void;
}

export const PanelOrder: FC<PanelOrderProps> = ({
  title,
  productsNum,
  date,
  id,
  activePanel,
  price,
  setOrdersPanel,
  products,
}) => {
  const pathname = usePathname();

  const [openModal, setOpenModal] = React.useState(false);
  const [modalDelete, setModalDelete] = React.useState('No');
  const [modalContent, setModalContent] = React.useState<
    {
      id: number;
      photo?: string;
      title?: string;
      type?: string;
    }[]
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

  const priceResultat = price.map((item) => (
    <p key={item.symbol}>
      {item.value + item.value} {item.symbol}
    </p>
  ));

  return (
    <div
      className={
        pathname === `/orders/${id}`
          ? `${styles.panelOrder} ${styles.panelOrder__active}`
          : styles.panelOrder
      }>
      <Link href={`/orders/${id}`}>
        {activePanel !== true ? <h4>{title}</h4> : ''}
        <div className={styles.product__number}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none">
            <path
              d="M21 12L9 12M21 6L9 6M21 18L9 18M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6ZM5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17C4.55228 17 5 17.4477 5 18Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <p>{productsNum}</p>
            <p>Продукта</p>
          </div>
        </div>
        <div className={styles.date}>{date}</div>
        {activePanel !== true ? <div className={styles.price}>{priceResultat}</div> : ''}
      </Link>
      {activePanel !== true ? (
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
      ) : (
        ''
      )}
      <ModalDelete
        title={'Ви уверени, что хотите удалить етот приход?'}
        content={modalContent}
        open={openModal}
        setOpen={setOpenModal}
        setModalDelete={setModalDelete}
      />
    </div>
  );
};
