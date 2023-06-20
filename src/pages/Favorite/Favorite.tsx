import React from 'react';

import { useAppSelector } from '../../redux/hooks.ts';

import CardItem from '../../components/CardItem';
import NotFound from '../../components/NotFound';

import styles from './styles/styles.module.css';

const Favorite: React.FC = () => {
    const items = useAppSelector((state) => state.favorite.items);

    React.useEffect(() => {
        const json = JSON.stringify(items);
        localStorage.setItem('favorite', json);
    }, [items]);

    // Сделать отдельным компонентом и передавать в него title и text
    if (items.length === 0) {
        return <NotFound />;
    }

    return (
        <section className={`${styles.Favorite} ${styles.shell}`}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Избранное</h2>
                </div>
                <div className={styles.grid}>
                    {items.map((obj) => (
                        <CardItem key={obj.id} {...obj} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Favorite;
