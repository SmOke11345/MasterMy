import React from 'react';

import { arrCategories } from './category.tsx';

import styles from './styles/styles.module.css';

type CategoriesProps = {
    value: number;
    handleCategory: (index: number) => void;
};

const Categories: React.FC<CategoriesProps> = ({ value, handleCategory }) => {
    return (
        <div className={styles.categories}>
            {arrCategories.map((obj, index) => {
                return (
                    <div
                        key={index}
                        className={`${styles.categories__item} ${
                            index === value ? styles.active : ''
                        }`}
                        onClick={() => handleCategory(index)}>
                        <h4>{obj.name}</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default Categories;
