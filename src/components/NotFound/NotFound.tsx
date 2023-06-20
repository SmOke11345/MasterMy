import React from 'react';

import styles from '../../pages/Favorite/styles/styles.module.css';
import { useLocation } from 'react-router-dom';

const NotFound: React.FC = () => {
    const location = useLocation();

    return (
        <section className={styles.shell}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>{location.pathname === '/favorite' ? 'Избранное' : 'Корзина'}</h2>
                </div>
                <div className={styles.shell}>
                    <h2 style={{ margin: ' 0 auto', width: '100%', textAlign: 'center' }}>
                        {location.pathname === '/favorite'
                            ? 'Ничего не найдено, добавьте товар в избранное '
                            : 'Ничего не найдено, добавьте товар в корзину :)'}
                    </h2>
                </div>
            </div>
        </section>
    );
};
export default NotFound;
