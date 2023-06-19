import React from 'react';

import { useNavigate } from 'react-router-dom';
import { setCategory } from '../../redux/filter/slice.ts';
import { useAppDispatch } from '../../redux/hooks.ts';
import { arrCategories } from '../../components/Categories/category.tsx';

import sale from './img/sale.png';

import styles from './styles/styles.module.css';

const Main: React.FC = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const navigateTo = (link: string, name: string): void => {
        navigate(link);
        dispatch(setCategory(name));
        window.scrollTo(0, 0);
    };

    return (
        <div className={`${styles.Main} ${styles.shell}`}>
            <div className={styles.container}>
                <section>
                    <div className={styles.wrapper}>
                        <div>
                            <div className={styles.categories}>
                                {arrCategories.map((obj, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            navigateTo(`${obj.link}`, obj.name);
                                        }}
                                        className={styles.categories__item}>
                                        <div className={styles.categories__img}>
                                            <img src={obj.img} alt="" />
                                        </div>
                                        <div className={styles.categories__name}>
                                            <h5>{obj.name}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className={styles.banner}>
                                <div className={styles.banner__inner}>
                                    <div className={styles.banner__img}>
                                        <img src={sale} alt="" />
                                    </div>
                                    <div className={styles.banner_bottom}>
                                        <div className={styles.small_width}>
                                            <div className={styles.banner_bottom__title}>
                                                <h4>Выгодно сегодня</h4>
                                            </div>
                                            <div className={styles.banner_bottom__subtitle}>
                                                <p>
                                                    Скидки на все, Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.btn}>
                                            <a onClick={() => navigateTo('/catalog', 'все')}>
                                                Все товары
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={styles.title}>
                        <h2>Одежда</h2>
                    </div>
                    <div className={styles.grid_wrapper}>
                        <div className={styles.grid}>
                            <div className={styles.grid__item}></div>
                            <div className={styles.grid__item}></div>
                            <div className={styles.grid__item}></div>
                            <div className={styles.grid__item}></div>
                        </div>
                        <div className={styles.link}>
                            <a onClick={() => navigateTo('/catalog', 'одежда')}>Посмотреть все</a>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h2>Электроника</h2>
                    </div>
                    <div className={styles.grid_wrapper}>
                        <div className={`${styles.grid} ${styles.grid_reverse}`}>
                            <div className={styles.grid__item}></div>
                            <div className={styles.grid__item}></div>
                            <div className={styles.grid__item}></div>
                            <div className={styles.grid__item}></div>
                        </div>
                        <div className={styles.link}>
                            <a onClick={() => navigateTo('/catalog', 'электроника')}>
                                Посмотреть все
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Main;
