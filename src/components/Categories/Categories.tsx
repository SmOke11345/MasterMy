import React from 'react';

import { arrCategories } from './category.tsx';

import styles from './styles/styles.module.css';

type CategoriesProps = {
    category: string;
    handleCategory: (name: string) => void;
};

const Categories: React.FC<CategoriesProps> = ({ category, handleCategory }) => {
    return (
        <div className={styles.categories}>
            {arrCategories.map((obj) => {
                return (
                    <div
                        key={obj.name}
                        className={`${styles.categories__item} ${
                            category === obj.name ? styles.active : ''
                        }`}
                        onClick={() => handleCategory(obj.name)}>
                        <h4>{obj.name}</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default Categories;
