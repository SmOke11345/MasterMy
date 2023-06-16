import React from 'react';

import styles from './styles/styles.module.css';

const AboutUs: React.FC = () => {
    return (
        <section className={`${styles.AboutUs} ${styles.shell}`}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>О нас</h1>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
