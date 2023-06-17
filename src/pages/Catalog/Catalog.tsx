import React from 'react';
import CardItem from '../../components/CardItem';

import styles from './styles/styles.module.css';

const Catalog: React.FC = () => {
    return (
        <section className={`${styles.Catalog} ${styles.shell}`}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div>
            </div>
        </section>
    );
};

export default Catalog;
