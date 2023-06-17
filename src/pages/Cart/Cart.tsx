import React from 'react';

import styles from './styles/styles.module.css';

const Cart: React.FC = () => {
    return (
        <section className={`${styles.Cart} ${styles.shell}`}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Корзина</h2>
                </div>
            </div>
        </section>
    );
};

export default Cart;
