import React from 'react';
import { useHover } from 'usehooks-ts';

import styles from './styles/styles.module.css';

const CardItem: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isHover = useHover(ref);

    return (
        <div ref={ref} className={styles.card}>
            <div className={styles.card__top}>
                <div className={styles.card__img}>
                    <img src="" alt="" />
                </div>
                <div className={styles.card__inner}>
                    <div className={styles.wrapper}>
                        <div className={styles.card__title}>
                            <h2>Название</h2>
                        </div>
                        <div className={styles.card__price}>
                            <h2>2000 ₽</h2>
                        </div>
                    </div>
                    <div className={`${styles.card__bottom} ${isHover ? '' : styles.display_none}`}>
                        <div className={styles.wrapper}>
                            <div className={styles.btn}>
                                <a href="#">В корзину</a>
                            </div>
                            <div
                                className={`${styles.button_wrapper} ${styles.small} ${styles.heart}`}>
                                <svg
                                    width="25"
                                    height="23"
                                    viewBox="0 0 25 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.5 22.9375L10.6875 21.2875C4.25 15.45 0 11.5875 0 6.875C0 3.0125 3.025 0 6.875 0C9.05 0 11.1375 1.0125 12.5 2.6C13.8625 1.0125 15.95 0 18.125 0C21.975 0 25 3.0125 25 6.875C25 11.5875 20.75 15.45 14.3125 21.2875L12.5 22.9375Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
