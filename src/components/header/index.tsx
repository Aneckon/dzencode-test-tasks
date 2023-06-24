'use client';
import React from 'react';

import styles from '@/styles/components/Header.module.scss';

const today = new Date();

export const Header = () => {
  const [hours, setHours] = React.useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      const todayHours = new Date();
      setHours(todayHours.getHours() + ':' + todayHours.getMinutes());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <div className={styles.logo}>Logo</div>
          <div className={styles.search}>
            <input type="text" placeholder="Поиск" />
          </div>
          <div className={styles.time}>
            <div>
              <p>
                {today.toLocaleDateString('ru', {
                  weekday: 'long',
                })}
              </p>
              <p>
                {today.toLocaleDateString('ru', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
            <div className={styles.time__hours}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none">
                <path d="M12 8V12L15 15" stroke="#8BC34A" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="9" stroke="#8BC34A" strokeWidth="2" />
              </svg>
              <p>{hours.length ? hours : 'loading...'}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
