import React, { FC } from 'react';
import Image from 'next/image';

import styles from '@/styles/components/ModalDelete.module.scss';

interface ModalDeleteProps {
  title: string;
  content: { id: number; photo?: string; title?: string; type?: string }[];
  open: boolean;
  setOpen: (open: boolean) => void;
  setModalDelete: (open: string) => void;
}

export const ModalDelete: FC<ModalDeleteProps> = ({
  open,
  setOpen,
  title,
  content,
  setModalDelete,
}) => {
  return (
    <div className={open === true ? `${styles.modal} ${styles.modal__open}` : styles.modal}>
      <div className={styles.modal__header}>
        <h4>{title}</h4>
      </div>
      <div className={styles.modal__body}>
        {content.length
          ? content.map((item) => (
              <div className={styles.modal__panel} key={item.id}>
                {item?.photo?.length ? (
                  <Image
                    src={`http://localhost:3000/${item.photo}`}
                    alt={item.photo}
                    width={50}
                    height={50}
                  />
                ) : (
                  ''
                )}
                <div>
                  <p>{item.title}</p>
                  <p>{item.type}</p>
                </div>
              </div>
            ))
          : 'loading...'}
      </div>
      <div className={styles.modal__footer}>
        <button
          onClick={() => {
            setModalDelete('No');
            setOpen(false);
          }}
          className={styles.btn}>
          ОТМЕНИТЬ
        </button>
        <button
          onClick={() => setModalDelete('Yes')}
          className={`${styles.btn} ${styles.btn__primary}`}>
          УДАЛИТЬ
        </button>
      </div>
      <div onClick={() => setOpen(false)} className={styles.close}>
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
